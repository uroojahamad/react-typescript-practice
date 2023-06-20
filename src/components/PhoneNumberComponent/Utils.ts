export const formatPhoneNumber = (input : string) => {
    // Remove non-digit characters from input
    const digits = input.replace(/\D/g, '');

    const firstPart = digits.slice(0, 3);
    const middlePart = digits.slice(3, 6);
    const lastPart = digits.slice(6, 10);
    let formattedNumber = '';

    if (digits.length > 6) {
      formattedNumber = `(${firstPart})${middlePart}-${lastPart}`;
    } else if (digits.length > 3) {
      formattedNumber = `(${firstPart})${middlePart}`;
    } else if (digits.length > 0) {
      formattedNumber = `(${firstPart}`;
    }

    return formattedNumber
  };