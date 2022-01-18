import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import RestaurantDetail from '../../screens/RestaurantDetail';

export const localRestaurants = [
    {
        name: "Beachside Bar",
        image_url: "https://cdn.cheapism.com/images/iStock-1031600274.2e16d0ba.fill-1440x605.jpg",
        categories: ['Cafe', 'Bar'],
        price: '$$',
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: "Benihana",
        image_url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80",
        categories: ['Cafe', 'Bar'],
        price: '$$',
        reviews: 1244,
        rating: 3.7,
    },
    {
        name: "IndFood",
        image_url: "https://24onlinemagazin.com/wp-content/uploads/2020/10/image1.jpg",
        categories: ['Indian', 'Bar'],
        price: '$$$',
        reviews: 700,
        rating: 4.9,
    },
]

export default function RestaurantItems({ navigation, ... props }) {
    return (
        <>
            {props.restaurantData.map((restaurant, index) => (
                <TouchableOpacity
                    key={index} 
                    activeOpacity={1} 
                    style={{marginBottom: 30}} 
                    onPress={() => navigation.navigate('RestaurantDetail', {
                        name: restaurant.name,
                        image: restaurant.image_url,
                        price: restaurant.price,
                        reviews: restaurant.review_count,
                        rating: restaurant.rating,
                        categories: restaurant.categories,
                    })}
                >
                    <View 
                        style={{
                            marginTop: 10, 
                            padding: 15, 
                            backgroundColor: 'white'}
                        }
                    >
                        <RestaurantImage 
                            image={restaurant.image_url}
                        />
                        <RestaurantInfo 
                            name={restaurant.name} 
                            rating={restaurant.rating}
                        />
                    </View>
                
                </TouchableOpacity>
            ))}
        </>
    )
}

const RestaurantImage = (props) => (
    <>
        <Image 
            source={{
                uri: props.image,
            }}
            style={{width: "100%", height: 180}}
        />
        <TouchableOpacity style={{position: "absolute", right: 20, top: 20}}>
            <MaterialCommunityIcons name='heart-outline' size={25} color='#fff' />
        </TouchableOpacity>
    </>
);


const RestaurantInfo = (props) => (
    <View style={{
        flexDirection: "row", 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginTop: 10,    
    }}>
        <View>
            <Text 
                style={{fontSize: 15, 
                fontWeight: 'bold'}}>{props.name}
            </Text>
            <Text style={{fontSize: 13, color: 'gray'}}>30-45 • min</Text>
        </View>
        <View style={{
                backgroundColor: '#eee', 
                height: 30, 
                width: 30, 
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 15,
        }}>
            <Text>{props.rating}</Text>
        </View>
    </View>
)