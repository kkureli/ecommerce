import React, {memo} from 'react';
import {FC} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {ApplicationState, CartState, onAddItem, Product} from '../../redux';
import LightTheme from '../../theme/LightTheme';
import ScaledImage from '../AutoScaleImage';
import Typography from '../common/Typography';

interface DealProps {
  item: Product;
  cartReducer: CartState;
  onAddItem: Function;
}

const RenderDeal: FC<DealProps> = props => {
  const {item, onAddItem} = props;

  const randomHeightValues = [320, 440, 560];
  const randomDiscountValues = [10, 25, 50];

  const imageSizer = (image: string) => {
    const selectedHeight =
      randomHeightValues[Math.floor(Math.random() * randomHeightValues.length)];

    const path = image?.split('/')[4];

    const url = image?.replace(path, selectedHeight.toString());

    return url;
  };

  const randomDiscountPicker = () => {
    const discount =
      randomDiscountValues[
        Math.floor(Math.random() * randomDiscountValues.length)
      ];

    return discount;
  };

  return (
    <TouchableOpacity
      onPress={() => onAddItem(item)}
      style={{marginVertical: 10}}>
      <ScaledImage width={180} uri={imageSizer(item.image)} />
      <View>
        <Typography style={{width: 170}} numberOfLines={1}>
          {item.name}
        </Typography>
        <View style={styles.priceRow}>
          <Typography weight="bold" color={LightTheme.colors.primary}>
            ${item.price}
          </Typography>
          <Typography color="gray">
            {randomDiscountPicker() + '%'} OFF
          </Typography>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const mapToStateProps = (state: ApplicationState) => ({
  cartReducer: state.cartReducer
});

export default connect(mapToStateProps, {onAddItem})(memo(RenderDeal));

const styles = StyleSheet.create({
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 170
  }
});
