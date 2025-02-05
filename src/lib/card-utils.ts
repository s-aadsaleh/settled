export type CardType = 'amex' | 'visa' | 'mastercard' | 'diners' | 'rupay' | null;

export const getCardType = (number: string): CardType => {
  const cleanNumber = number.replace(/\D/g, '');
  
  if (!cleanNumber || cleanNumber.length < 4) return null;

  // AMEX - Starts with 34 or 37
  if (/^3[47]/.test(cleanNumber)) return 'amex';
  
  // Visa - Starts with 4
  if (/^4/.test(cleanNumber)) return 'visa';
  
  // Mastercard - Starts with 51-55 or 2221-2720
  if (/^(5[1-5]|22[2-9]|2[3-6][0-9]|27[0-1])/.test(cleanNumber)) return 'mastercard';

  
  // Diners Club - Starts with 36 or 300-305
  if (/^(36|30[0-5])/.test(cleanNumber)) return 'diners';
  
  // RuPay - Starts with 60, 65, 81, 82, 508
  if (/^(60|65|81|82|508)/.test(cleanNumber)) return 'rupay';
  
  return null;
};

export const formatCardNumber = (number: string, type: CardType = null): string => {
  const cleanNumber = number.replace(/\D/g, '');
  
  if (!cleanNumber) return '';
  
  if (type === 'amex') {
    // Format: XXXX XXXXXX XXXXX
    const parts = [
      cleanNumber.substring(0, 4),
      cleanNumber.substring(4, 10),
      cleanNumber.substring(10, 15)
    ];
    return parts.filter(part => part).join(' ');
  }
  
  // Format: XXXX XXXX XXXX XXXX
  const parts = cleanNumber.match(/.{1,4}/g) || [];
  return parts.join(' ');
};

export const validateCardNumber = (number: string): boolean => {
  const cleanNumber = number.replace(/\D/g, '');
  
  // Check length
  if (cleanNumber.length < 13 || cleanNumber.length > 19) return false;
  
  // Luhn Algorithm
  let sum = 0;
  let isEven = false;
  
  // Loop through values starting from the rightmost one
  for (let i = cleanNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cleanNumber.charAt(i));

    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  return sum % 10 === 0;
};

// Add card-specific validation
export const isValidCardNumber = (number: string, type: CardType): boolean => {
  const cleanNumber = number.replace(/\D/g, '');
  
  if (!validateCardNumber(cleanNumber)) return false;

  switch (type) {
    case 'amex':
      return /^3[47][0-9]{13}$/.test(cleanNumber);
    case 'visa':
      return /^4[0-9]{12}(?:[0-9]{3})?$/.test(cleanNumber);
    case 'mastercard':
      return /^5[1-5][0-9]{14}$/.test(cleanNumber);
    case 'diners':
      return /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/.test(cleanNumber);
    case 'rupay':
      return /^6(?:0|5|7|8|9)[0-9]{14}$/.test(cleanNumber);
    default:
      return false;
  }
}; 