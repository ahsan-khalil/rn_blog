import React, {useContext} from "react";
import {View, StyleSheet, Text} from 'react-native';
import { Context as blogContext, Context } from "../context/BlogContext";

const ShowScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const { state } = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id == id);
    return (
        <View>
            <Text style={styles.title}>{blogPost.title}</Text>
            <Text style={styles.title}>{blogPost.content}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20
    }
})

export default ShowScreen;