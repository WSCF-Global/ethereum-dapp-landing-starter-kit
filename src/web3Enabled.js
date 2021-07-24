import Web3 from 'web3';
import Onboard from 'bnc-onboard';
import Notify from 'bnc-notify';

export class Web3Enabled {
  constructor() {
    console.log(process.env.REACT_APP_INFURA_KEY)
    this.assistInstance = null;
    this.blocknativeAPIKey = process.env.REACT_APP_BLOCKNATIVE_KEY;
    this.infuraKey = "cb55fad7b02849bf8f4f9bfcc933c128";
    this.portisAPIKey = process.env.REACT_APP_PORTIS_API_KEY;
    this.squarelinkKey = process.env.REACT_APP_SQUARE_LINK_KEY;
    this.fortmaticKey = process.env.REACT_APP_FORTMATIC_KEY;
    this.networkID = 42;
    this.state = {
      address: null
    };
  }

  async connect(onConnected, onError, isStartupMode) {
    if (!this.assistInstance) {
      const wallets = [{
          walletName: 'metamask',
          preferred: true
        }, {
          walletName: "walletConnect",
          infuraKey: this.infuraKey,
          preferred: true
        }, {
          walletName: 'authereum',
          networkId: this.networkID
        }, {
          walletName: 'fortmatic',
          label: 'Login with email / phone',
          apiKey: this.fortmaticKey,
          networkId: this.networkID
        }, {
          walletName: 'portis',
          apiKey: this.portisAPIKey,
          networkId: this.networkID
        }, {
          walletName: 'squarelink',
          apiKey: this.squarelinkKey,
          networkId: this.networkID
        },
      ];

      const walletChecks = [
        { checkName: 'connect' },
        { checkName: 'network' },
        { checkName: 'balance', minimumBalance: '0' }
      ];

      const walletSelectConfig = {
        heading: 'Select a Wallet',
        description: 'Please select a wallet to connect to this dapp:',
        wallets
      };

      const bncAssistConfig = {
        dappId: this.blocknativeAPIKey,
        darkMode: false,
        networkId: this.networkID,
        blockPollingInterval: 1000000,
        subscriptions: {
          wallet: wallet => {
            if (wallet.provider) {
              this.web3 = new Web3(wallet.provider);
            }
            // store the selected wallet name to be retrieved next time the app loads
            window.localStorage.setItem('selectedWallet', wallet.name);
          },
          address: this.doNothing,
          network: this.doNothing,
          balance: this.doNothing
        },
        walletSelect: walletSelectConfig,
        walletCheck: walletChecks
      };
      this.assistInstance = Onboard(bncAssistConfig);
    }

    // Get user to select a wallet
    let selectedWallet;
    if (isStartupMode) {
      // Startup mode: connect to previously used wallet if available, else open selection screen
      // get the selectedWallet value from local storage
      const previouslySelectedWallet = window.localStorage.getItem('selectedWallet');
      // call wallet select with that value if it exists
      if (previouslySelectedWallet != null) {
        selectedWallet = await this.assistInstance.walletSelect(previouslySelectedWallet);
      } else {
        selectedWallet = await this.assistInstance.walletSelect();
      }
    } else {
      // Non startup mode: open wallet selection screen
      selectedWallet = await this.assistInstance.walletSelect();
    }
    const state = this.assistInstance.getState();
    if (
      selectedWallet
      || state.address !== null // If user already logged in but want to switch account, and then dismissed window
    ) {
      // Get users' wallet ready to transact
      const ready = await this.assistInstance.walletCheck();
      this.state = this.assistInstance.getState();

      if (!ready) {
        // Selected an option but then dismissed it
        // Treat as no wallet
        onError();
      } else {
        // Successfully connected
        onConnected();
      }
    } else {
      // User refuses to connect to wallet
      // Update state
      this.state = this.assistInstance.getState();
      onError();
    }

    if (!this.notifyInstance) {
      this.notifyInstance = Notify({
        dappId: this.blocknativeAPIKey,
        networkId: this.networkID
      });
      this.notifyInstance.config({
        darkMode: true
      });
    }
  }

  async getEthBalance(address) {
    return this.web3.eth.getBalance(address);
  }

  async estimateGas(func, val, _onError) {
    try {
      const gas = await func.estimateGas({
        from: this.state.address,
        value: val
      });

      return Math.floor(gas);
    } catch (error) {
      console.log('Estimate gas error:', error);
      return null;
    }
  }

  // Other web3 methods can be added here ...
}