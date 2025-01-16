import { View, Text, Image, useWindowDimensions } from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';

interface Prop {
  data: {
    id: number;
    title: string;
    description: string;
    image: any;
  };
}

const OnbordComponent = ({ data }: Prop) => {
    const {width} = useWindowDimensions()
  return (
    <View style={{width}} className='mt-20'>
      <Animatable.View
        animation="fadeIn"
        duration={1000}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20,
        }}
      >
        <Image
          source={data.image}
          style={{ width: 300, height: 300 }}
          resizeMode="contain"
        />
      </Animatable.View>

      <Animatable.View
        animation="slideInUp"
        duration={1000}
        delay={500}
        style={{ alignItems: 'center' }}
      >
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#333' }}>
          {data.title}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 10,
            color: '#555',
            paddingHorizontal: 20,
          }}
        >
          {data.description}
        </Text>
      </Animatable.View>
    </View>
  );
};

export default OnbordComponent;
