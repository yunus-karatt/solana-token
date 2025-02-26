import create, { State } from 'zustand';
import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js"

interface UsersSOLBalanceStore extends State {
  balance: number;
  getUserSOLBalance: (publicKey: PublicKey, connection: Connection) => void;
}

const useUserSOLBalanceStore = create<UsersSOLBalanceStore>((set, _get) => ({
  balance: 0,
  getUserSOLBalance: async (publicKey: PublicKey, connection: Connection) => {
    let balance = 0
    try {
      balance = await connection.getBalance(publicKey, "confirmed");
      balance = balance / LAMPORTS_PER_SOL
    } catch (error) {
      console.log(error)
    }
    set(s => { s.balance = balance; console.log("balance", balance);  })
  }
}));

export default useUserSOLBalanceStore;