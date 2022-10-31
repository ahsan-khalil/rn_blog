import React, { useState } from "react";
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);
    return (
        <View>
            <Text style={styles.title}>Enter Title</Text>
            <TextInput style={styles.inputStyle} value={title} onChangeText={ text => setTitle(text) } />
            <Text style={styles.title}>Enter Content</Text>
            <TextInput style={styles.inputStyle} value={content} onChangeText={ text => setContent(text) } />
            <Button 
                    title="SAVE BLOG POST" 
                    onPress={() => { onSubmit(title, content) }}
            />
        </View>
    )
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}

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

export default BlogPostForm;