export function formatCurrency(value: string | number | any, currency = '₦', locale = 'en-NG') {
    // Ensure the input is a valid number
    let number = value
    if(typeof value === "string"){
     number = parseFloat(value);
    }
    if (isNaN(number)) {
      throw new Error('Invalid number input');
    }
  
    // Format the number as currency
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currencyDisplay: 'symbol',
      currency: currency === '₦' ? 'NGN' : currency,
    }).format(number);
  }
  