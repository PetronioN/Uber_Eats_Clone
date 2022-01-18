import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BottomTabs from '../components/Home/BottomTabs';
import Categories from '../components/Home/Categories';
import HeaderTabs from '../components/Home/HeaderTabs';
import RestaurantItems, { localRestaurants } from '../components/Home/RestaurantItems';
import SearchBar from '../components/Home/SearchBar';

const YELP_API_KEY = 
    'ubzo7blKzfcNqkjvwzhUaU3WwOtQJAWK4nr4M_NMmJxhHFXp3tFu-V-qPZ_gUBRfhXa5RJRLKGSw6AztP3NHyS9YFul1vKVEKyk1ugcwCbrYcSMdB9eCAwyb_pLgYXYx';

export default function Home({ navigation }) {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    
    const getRestaurantsFromYelp = () => {
        const yelpUrl = 'https://api.yelp.com/v3/businesses/search?term=restaurants&location=Fortaleza';
    

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };


        return fetch(yelpUrl, apiOptions)
        .then((res) => res.json())
        .then((json) => setRestaurantData(json.businesses));
    };

    useEffect(() => {
        getRestaurantsFromYelp();
    }, []);

    return (
        <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
            <View style={{ backgroundColor: "white", padding: 15 }}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems 
                    restaurantData={restaurantData} 
                    navigation={navigation}
                />
            </ScrollView>
            <Divider width={1} />
            <BottomTabs />
        </SafeAreaView>
    );
}
