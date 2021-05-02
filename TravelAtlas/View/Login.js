import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styled from 'styled-components/native';
import { formik } from 'formik'

const Body = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;


const Login = () => {
  return (
    <Body>
        <Screen>
            <formik
                initialValues={{email: "", password: ""}}
                onSubmit={(values) => {

                }}
            >   
                {(props) => (
                    <View>
                        <Text>"Email"</Text>
                        <TextInput
                            style={Input}
                            placeholder="Example: email123@gmail.com"
                            onChangeText={props.handleChange("email")}
                            value={props.values.email}
                        />
                        <Text>"Password"</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Example: Lemon1889"
                            onChangeText={props.handleChange("password")}
                            value={props.values.password}
                        />
                        <Button title="Login" color="blue"  onPress={props.handleSubmit} />
                    </View>
                )}
            </formik>
        </Screen>
    </Body>
  );
};

const Screen = styled.View`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background: white;
`;

const Input = styled.View`
    height: 40;
    margin: 12;
    borderWidth: 1;
    `;
export default Login;
