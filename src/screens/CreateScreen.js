import React, {useState, useContext} from "react";
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import { Context as blogContext, Context } from "../context/BlogContext";

const CreateScreen = ({navigation}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { addBlogPost } = useContext(blogContext)
    return (
        <View>
            <Text style={styles.title}>Enter Title</Text>
            <TextInput style={styles.inputStyle} value={title} onChangeText={ text => setTitle(text) } />
            <Text style={styles.title}>Enter Content</Text>
            <TextInput style={styles.inputStyle} value={content} onChangeText={ text => setContent(text) } />
            <Button 
                    title="ADD BLOG POST" 
                    onPress={() => { addBlogPost(title, content, () => {
                        navigation.navigate('Index');
                    });
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        marginHorizontal: 15,
        marginTop: 15
    },
    inputStyle: {
        fontSize: 18,
        borderWidth: 2,
        borderColor: 'gray',
        padding: 5,
        marginHorizontal: 15,
        marginTop: 5,
        borderRadius: 6
    }
})

export default CreateScreen;