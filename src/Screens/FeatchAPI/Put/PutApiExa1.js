// import { Button, StyleSheet, Text, View } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { ScrollView } from 'react-native';
// import { Modal } from 'react-native';
// import { TextInput } from 'react-native';

// const PutApiExa1 = () => {
//     const [data, setData] = useState([]);
//     const [showModel, setShowModel] = useState(false)
//     const [selectedUser, setSelectedUser] = useState(undefined)
//     // define a function that retrieves API data and sets it in state
//     const getApiData = async () => {
//         const url = "http://10.0.2.2:3000/users"
//         let result = await fetch(url);
//         result = await result.json();
//         if (result) {
//             setData(result)
//         }

//     }

//     const deleteData = async (id) => {
//         const url = "http://10.0.2.2:3000/users"
//         console.warn(`${url}/${id}`);
//         let result = await fetch(`${url}/${id}`,
//             {
//                 method: "delete"
//             });
//         result = await result.json();
//         if (result) {
//             // setData(result)
//             console.warn("user Deleted");
//             getApiData();
//         }

//     }
//     // call the function to retrieve data
//     useEffect(() => {
//         getApiData();
//     }, [])

//     const updateUser = (data) => {
//         setShowModel(true);
//         setSelectedUser(data)
//     }

//     return (
//         <View style={{ flex: 1 }}>
//             <View style={{ flexDirection: "row", justifyContent: "space-around", backgroundColor: "orange", margin: 5, padding: 8 }}>
//                 <View style={{ flex: 1 }}><Text>Name</Text></View>
//                 <View style={{ flex: 2 }}><Text>Age</Text></View>
//                 <View style={{ flex: 2 }}><Text>Operations</Text></View>
//             </View>
//             <ScrollView>
//                 {
//                     data ?
//                         data.map((item) => <View style={{ flexDirection: "row", justifyContent: "space-around", backgroundColor: "orange", margin: 5, padding: 8 }}>
//                             <View style={{ flex: 1 }}><Text>{item.name}</Text></View>
//                             <View style={{ flex: 1 }}><Text>{item.age}</Text></View>
//                             <View style={{ flex: 1 }}><Button title='Delete' onPress={() => deleteData(item.id)} /></View>
//                             <View style={{ flex: 1 }}><Button title='Update' onPress={() => updateUser(item)} /></View>
//                         </View>) : null
//                 }

//                 <Modal visible={showModel} transparent={true}  >
//                     <UserModel setShowModel={setShowModel} selectedUser={selectedUser} />
//                 </Modal>

//             </ScrollView>
//         </View>
//     )
// };

// const UserModel = (props) => {

//     console.warn(props.selectedUser);
//     //key values from data(Users)
//     const [name, setName] = useState(undefined)
//     const [age, setAge] = useState(undefined)
//     const [email, setEmail] = useState(undefined)

//     useEffect(() => {
//         if (props.selectedUser) {
//             setName(props.selectedUser.name)
//             setAge(props.selectedUser.age.toString())
//             setEmail(props.selectedUser.email)
//         }
//     }, [props.selectedUser])

//     //put api
//     const updateUserData = async (props) => {

//         console.warn(name, age, email, props.selectedUser.id);
//         const url = "http://10.0.2.2:3000/users";
//         const id = props.selectedUser.id;
//         const updatedUserData = {
//             name: name,
//             age: age,
//             email: email,
//         };
//         let result = await fetch(`${url}/${id}`, {
//             method: "PUT",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(updatedUserData),
//         });
//         result = await result.json();
//         if (result) {
//             console.warn("User Updated");
//             // Refresh the data after the update.
//             getApiData();
//         }
//     };

//     return (<View style={styles.centerView}>
//         <View style={styles.modelView}>
//             <TextInput style={styles.inputStyle} value={name} onChangeText={(text) => {
//                 setName(text)
//             }} />
//             <TextInput style={styles.inputStyle} value={age} onChangeText={(text) => {
//                 setAge(parseInt(text))
//             }} />
//             <TextInput style={styles.inputStyle} value={email} onChangeText={(text) => {
//                 setEmail(text)
//             }} />
//             <View style={{ marginBottom: 20 }} >
//                 <Button title='Save' onPress={updateUserData} />
//             </View>
//             <Button title='close' onPress={() => props.setShowModel(false)} />
//         </View>
//     </View>
//     )
// }

// export default PutApiExa1

// const styles = StyleSheet.create({
//     centerView: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: 'center',
//     },
//     modelView: {
//         backgroundColor: 'white',
//         padding: 60,
//         borderRadius: 5,
//         shadowColor: "black",
//         shadowOpacity: 0.69,
//         elevation: 8
//     },
//     inputStyle: {
//         borderColor: "sky-blue",
//         borderWidth: 1,
//         width: 300,
//         marginBottom: 20,
//         height: 40,
//         fontSize: 20,
//         padding: 5
//     }
// })








import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native';
import { Modal } from 'react-native';
import { TextInput } from 'react-native';

const PutApiExa1 = () => {
    const [data, setData] = useState([]);
    const [showModel, setShowModel] = useState(false)
    const [selectedUser, setSelectedUser] = useState(undefined)
    // define a function that retrieves API data and sets it in state
    const getApiData = async () => {
        const url = "http://10.0.2.2:3000/users"
        let result = await fetch(url);
        result = await result.json();
        if (result) {
            setData(result)
        }

    }

    const deleteData = async (id) => {
        const url = "http://10.0.2.2:3000/users"
        console.warn(`${url}/${id}`);
        let result = await fetch(`${url}/${id}`,
            {
                method: "delete"
            });
        result = await result.json();
        if (result) {
            // setData(result)
            console.warn("user Deleted");
            getApiData();
        }

    }
    // call the function to retrieve data
    useEffect(() => {
        getApiData();
    }, [])

    const updateUser = (data) => {
        setShowModel(true);
        setSelectedUser(data)
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-around", backgroundColor: "orange", margin: 5, padding: 8 }}>
                <View style={{ flex: 1 }}><Text>Name</Text></View>
                <View style={{ flex: 2 }}><Text>Age</Text></View>
                <View style={{ flex: 2 }}><Text>Operations</Text></View>
            </View>
            <ScrollView>
                {
                    data ?
                        data.map((item) => <View style={{ flexDirection: "row", justifyContent: "space-around", backgroundColor: "orange", margin: 5, padding: 8 }}>
                            <View style={{ flex: 1 }}><Text>{item.name}</Text></View>
                            <View style={{ flex: 1 }}><Text>{item.age}</Text></View>
                            <View style={{ flex: 1 }}><Button title='Delete' onPress={() => deleteData(item.id)} /></View>
                            <View style={{ flex: 1 }}><Button title='Update' onPress={() => updateUser(item)} /></View>
                        </View>) : null
                }

                <Modal visible={showModel} transparent={true}  >
                    <UserModel setShowModel={setShowModel} selectedUser={selectedUser} getApiData={getApiData} />
                </Modal>

            </ScrollView>
        </View>
    )
};

const UserModel = (props) => {

    console.warn(props.selectedUser);
    //key values from data(Users)
    const [name, setName] = useState(undefined)
    const [age, setAge] = useState(undefined)
    const [email, setEmail] = useState(undefined)

    useEffect(() => {
        if (props.selectedUser) {
            setName(props.selectedUser.name)
            setAge(props.selectedUser.age.toString())
            setEmail(props.selectedUser.email)
        }
    }, [props.selectedUser])

    //put api
    const updateUserData = async () => {
        // Check if props.selectedUser is defined
        if (!props.selectedUser) {
            console.warn("No selected user to update.");
            return;
        }

        const url = "http://10.0.2.2:3000/users";
        const id = props.selectedUser.id;
        const updatedUserData = {
            name: name,
            age: age,
            email: email,
        };

        let result = await fetch(`${url}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedUserData),
        });

        result = await result.json();
        if (result) {
            console.warn("User Updated");
            // Update the UI to reflect the changes (if needed).
            props.setShowModel(false); // Close the modal after successful update
            // Do not call getApiData here; let the parent component handle it.
            props.getApiData()
        }
    };


    return (<View style={styles.centerView}>
        <View style={styles.modelView}>
            <TextInput style={styles.inputStyle} value={name} onChangeText={(text) => {
                setName(text)
            }} />
            <TextInput style={styles.inputStyle} value={age} onChangeText={(text) => {
                setAge(parseInt(text))
            }} />
            <TextInput style={styles.inputStyle} value={email} onChangeText={(text) => {
                setEmail(text)
            }} />
            <View style={{ marginBottom: 20 }} >
                <Button title='Save' onPress={updateUserData} />
            </View>
            <Button title='close' onPress={() => props.setShowModel(false)} />
        </View>
    </View>
    )
}

export default PutApiExa1

const styles = StyleSheet.create({
    centerView: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    modelView: {
        backgroundColor: 'white',
        padding: 60,
        borderRadius: 5,
        shadowColor: "black",
        shadowOpacity: 0.69,
        elevation: 8
    },
    inputStyle: {
        borderColor: "sky-blue",
        borderWidth: 1,
        width: 300,
        marginBottom: 20,
        height: 40,
        fontSize: 20,
        padding: 5
    }
})