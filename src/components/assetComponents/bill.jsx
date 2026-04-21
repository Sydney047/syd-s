export default function billCalculator( { items } ) {
    let totalBill = 0;

    items.map( item => {
        return totalBill = totalBill + ( item.price * item.quantity );
    })
    return totalBill.toFixed( 2 );
}