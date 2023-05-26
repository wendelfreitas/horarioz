import { InputProps } from '@horarioz/ui';
import { useTranslation } from 'react-i18next';
import { currencies } from '../../utils/contants/constants';
import { Input } from '../Input/Input';

type CurrencyFieldProps = InputProps;

export const CurrencyField = ({
  placeholder,
  ...props
}: CurrencyFieldProps) => {
  const { i18n } = useTranslation();
  const currency = currencies[i18n.language];

  const getPlaceholder = () => {
    if (placeholder) {
      return placeholder;
    }

    return currency.symbol;
  };

  return (
    <Input
      {...props}
      placeholder={getPlaceholder()}
      mask={`${currency.symbol} price`}
      blocks={{
        price: {
          mask: Number,
          padFractionalZeros: true,
          min: 0,
          thousandsSeparator: currency.thousandsSeparator,
          radix: currency.radix,
          mapToRadix: [currency.thousandsSeparator],
        },
      }}
    />
  );
};
