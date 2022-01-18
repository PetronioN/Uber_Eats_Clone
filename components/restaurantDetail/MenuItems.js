import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native'
import { Divider } from "react-native-elements";
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch, useSelector } from 'react-redux';

const foods = [
    {
      title: "Lasagna",
      description: "With butter lettuce, tomato and sauce bechamel",
      price: "$11.25",
      image:
        "https://www.sabornamesa.com.br/media/k2/items/cache/13b5e0deaf19b06816d21e67ad4e211c_XL.jpg",
    },
    {
      title: "Fried Chicken",
      description:
        "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
      price: "$15.20",
      image: "https://t1.rg.ltmcdn.com/pt/posts/7/9/4/coxa_de_frango_frita_na_panela_de_pressao_5497_600.jpg",
    },
    {
      title: "Fries",
      description:
        "French fries with side dishes chosen by you",
      price: "$5.00",
      image:
        "https://conteudo.imguol.com.br/c/entretenimento/a0/2018/02/26/batata-frita-1519671488107_v2_4x3.jpg",
    },
    {
      title: "Salad",
      description:
        "The best salad in the country",
      price: "$21.50",
      image:
        "https://www.acouplecooks.com/wp-content/uploads/2019/05/Chopped-Salad-001_1.jpg",
    },
    {
      title: "Shrimps",
      description: "Shrimps selected and made with special sauce",
      price: "$13.50",
      image:
        "https://img.itdg.com.br/tdg/images/recipes/000/015/286/326210/326210_original.jpg?mode=crop&width=710&height=400",
    },
];

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },

    titleStyle: {
        fontSize: 19,
        fontWeight: '600',
    },
});

export default function MenuItems({ restaurantName }) {

    const dispatch = useDispatch();

    const selectItem = (item, checkboxValue) => dispatch({
        type: 'ADD_TO_CART', 
        payload: {
            ... item, 
            restaurantName: restaurantName, 
            checkboxValue: checkboxValue,
        },
    });

    const cartItems = useSelector(
        (state) => state.cartReducer.selectedItems.items
    );

    const isFoodInCart = (food, cartItems) => Boolean(cartItems.find((item) => item.title === food.title));

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {foods.map((food, index) => (
                <View key={index}>
                    <View style={ styles.menuItemStyle }>
                        <BouncyCheckbox 
                            iconstyle={{
                                borderColor: 'lightgray', 
                                borderRadius: 0,
                            }} 
                            fillColor='red'
                            isChecked={isFoodInCart(food, cartItems)}
                            onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                        />
                        <FoodInfo food={food} />
                        <FoodImage food={food} />
                    </View>
                    <Divider width={0.5} orientation="vertical" style={{marginHorizontal: 20}}/>
                </View>
            ))}
        </ScrollView>
    );
}

const FoodInfo = (props) => (
    <View style={{ width: 240, justifyContent: 'space-evenly' }}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
);

const FoodImage = (props) => (
    <View>
        <Image 
            source={{uri: props.food.image}} 
            style={{
                width: 100, 
                height: 100, 
                borderRadius: 8
            }} 
        />
    </View>
);
