import React, {useContext} from "react";
import { StyleSheet } from 'react-native';
import BlogPostForm from "../components/BlogPostForm";
import { Context as blogContext } from "../context/BlogContext";

const EditScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const { state, editBlogPost } = useContext(blogContext);
    const blogPost = state.find((blogPost) => { return blogPost.id === id });

    return (
       <BlogPostForm
                initialValues = { {title: blogPost.title, content: blogPost.content} } 
                onSubmit={(title, content) => {
                    editBlogPost(id, title, content, () => {
                        navigation.pop();
                    });
                }
            } 
       />
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

export default EditScreen;