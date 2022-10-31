import React, { useContext } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import { Context } from '../context/BlogContext';

export default function IndexScreen(props) {
  const {state, addBlogPost} = useContext(Context)
  return (
    <View>
        <Text>IndexScreen</Text>
        <Button title='Add Post' 
            onPress={addBlogPost}
        />
        <FlatList 
            data={state}
            keyExtractor={ (blogPost) => blogPost.title}
            renderItem={({ item }) => {
                  return <Text>{item.title}</Text>
              }
            }
        />
    </View>
  );
}

