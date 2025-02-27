import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

function HomePage() {
    const [value, setValue] = useState<string>('');
    const [lists, setList] = useState<string[]>([]);
    const [count, setCount] = useState<number>(0);
    const [editIndex, setEditIndex] = useState<number | null>(null);

    function handleAdd() {
        if (value.trim() !== "") {
            setList(prevList => {
                const updatedList = [...prevList, value];
                setCount(updatedList.length);
                return updatedList;
            });
            setValue('');
        }
    }

    function handleChange(text: string) {
        setValue(text);
    }

    function handleRemove(index: number) {
        setList(prevList => {
            const updatedList = prevList.filter((_, id) => id !== index);
            setCount(updatedList.length);
            return updatedList;
        });
    }

    function handleEdit(index: number) {
        setEditIndex(index); // Set the index of the item being edited
        setValue(lists[index]); // Pre-populate the TextInput with the current value
    }

    function handleSave() {
        if (editIndex !== null && value.trim() !== "") {
            setList(prevList => {
                const updatedList = [...prevList];
                updatedList[editIndex] = value; // Update the item at the edit index
                setCount(updatedList.length);
                return updatedList;
            });
            setValue('');
            setEditIndex(null); // Reset the edit mode
        }
    }

    return (
        <SafeAreaView style={styles.itemContainer}>
            <StatusBar style="auto" />
            <Button title="Add" onPress={handleAdd} />
            <Text>{count} items</Text>
            <TextInput 
                style={styles.input}
                placeholder="Add something"
                value={value} 
                onChangeText={handleChange}
            />
            {editIndex !== null && (
                <Button title="Save" onPress={handleSave} />
            )}
            <FlatList
                data={lists}
                keyExtractor={(id, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.itemBlock}>
                        <Text>{item}</Text>
                        <View style={styles.buttonGroup}>
                            <Button title="Edit" onPress={() => handleEdit(index)} />
                            <Button title="Remove" onPress={() => handleRemove(index)} />
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}

export default HomePage;

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        padding: 20,
    },
    input: {
        borderColor: "red",
        borderWidth: 2,
        borderRadius: 3,
        marginVertical: 8,
        padding: 8,
    },
    itemBlock: {
        backgroundColor: "magenta",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 10,
        padding: 10,
        paddingVertical: 12,
        paddingHorizontal: 4,
        marginVertical: 4,
        borderRadius: 12,
    },
    buttonGroup: {
        flexDirection: "row",
        gap: 8,
    },
});



// import { StatusBar } from 'expo-status-bar';
// import { useState } from 'react';
// import { StyleSheet,TextInput,Button, Text, View } from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';
// import { SafeAreaView } from 'react-native-safe-area-context';

// function Homepage()
// {
//     const [value, setValue] = useState<string>('');
//     const[list, setList] = useState<string[]>([]);

//     function handleChange(text:string)
//     {
//         setValue(text);
//         console.log(text);
//     }
//     function handleAdd(){
//         if(value.trim() !== ''){
//             setList(list => [...list, value]);
//             setValue('');            
//         }
//     }

//     function handleRemove(index: number) {
//         setList(list => list.filter((item, i) => i !== index));
//     }
//     return (
//         <SafeAreaView style={styles.itemContainer}>
//         <Text>Hello guys</Text>
//         <StatusBar style="auto" />
//         <Button title="Add" onPress={handleAdd}/>
//         <TextInput placeholder="Enter text" 
//         value={value}
//         style={styles.input}
//         onChangeText={handleChange} />
//         <FlatList
//         data={list}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({item,index}) => 
//         <View>

//         <Text>{item}</Text>
//         <Button title="Remove" onPress={() => handleRemove(index)}/>

//         </View>
//         }
//         />
        
//         </SafeAreaView>
//     )
// } 
//{
//     const [count, setCount] = useState<number>(0);

//     function increment() {
//         setCount(prevCount => prevCount + 1);
//     }

//     function decrement() {
//         setCount(prevCount => prevCount - 1);
//     }

//     return (
//         <View style={{ padding: 20, alignItems: "center" }}>
//             <Text style={{ fontSize: 20, marginBottom: 10 }}>Hello guys</Text>
            
//             <StatusBar style="auto" />
            
//             <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>{count}</Text>
            
//             <Button title="Increment" onPress={increment} />
//             <View style={{ marginVertical: 10 }}></View>
//             <Button title="Decrement" onPress={decrement} />
//         </View>
//     );
// }

// export default Homepage;

// const styles = StyleSheet.create({
//     itemContainer: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#fff',
//         padding: 20,
//         margin: 20,
//         borderRadius: 10,
      
//     },
//     input: {
//         borderWidth: 2,
//         borderColor: 'black',
//         padding: 10,
//         marginBottom: 10,
//         width: '100%',
//         borderRadius: 5,

//     },
//     item: {
//         margin: 10,
//         backgroundColor: 'lightblue',
//         padding: 10,
//         borderRadius: 5,
//         fontSize: 16,
//         fontWeight: 'bold',
//         textAlign: 'center',
//     }
// });



// import { StatusBar } from 'expo-status-bar';
// import { useState } from 'react';
// import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

// function HomePage() {
//     const [value, setValue] = useState<string>('');
//     const [lists, setList] = useState<string[]>([])
//         function handleAdd() {
//         if(value.trim() != "") {
//             setList(prevList => [...prevList, value]);
//             setValue('');
//         }
//     }
//     function handleChange(text: string) {
//         setValue(text);
//         console.log(value);
//     }
//     return (
//         <View>
//             <StatusBar style='auto'/>
//             <Button title='Add' onPress={handleAdd} />
//             <TextInput 
//                 placeholder="add" value={value} 
//                 onChangeText={handleChange}
//             />
//              <FlatList
//                 data={lists}
//                 keyExtractor={(id) => id.toString()}
//                 renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
//             />
//         </View>
//     )
// }

// export default HomePage;

// const styles = StyleSheet.create({
//     item: {
//         backgroundColor: "red",
//         paddingBlock: 12,
//         paddingInline: 4,
//         marginBlock: 4,
//         borderRadius: 12,
//     }
// })