import Coinpayments from "coinpayments";
interface CoinpaymentsCredentials {
    key: string;
    secret: string;
}
const coinPaymentsClient = new Coinpayments({
    key: process.env.COINPAYMENTS_KEY,
    secret: process.env.COINPAYMENTS_SECRET,
});

export default coinPaymentsClient;
