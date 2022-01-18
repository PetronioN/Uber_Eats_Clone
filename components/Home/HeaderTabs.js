import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function HeaderTabs(props) {

    const [activeTab, setActiveTab] = useState('Delivery');

    return (
        <View style={{flexDirection: "row", alignSelf: "center"}}>
            <HeaderButton 
                text="Delivery" 
                btnColor="red" 
                textColor="white" 
                activeTab={activeTab} 
                setActiveTab={setActiveTab} 
            />
            <HeaderButton 
                text="Pickup" 
                btnColor="white" 
                textColor="black" 
                activeTab={activeTab} 
                setActiveTab={setActiveTab} 
            />
            
        </View>
    );
}

const HeaderButton = (props) => (
    <TouchableOpacity
        style={{
            backgroundColor: props.activeTab === props.text ? "red" : "white",
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30,
        }}
        onPress={() => props.setActiveTab(props.text)}
    >
        <Text 
            style={{ 
                color: props.activeTab === props.text ? "white" : "black", 
                fontSize: 15, 
                fontWeight: "900" 
            }}>{props.text}</Text>
    </TouchableOpacity>
)
