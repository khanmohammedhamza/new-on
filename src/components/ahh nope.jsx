import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
const { StorageAccessFramework } = FileSystem;
const saveFile = async () => {
  console.log("callef")
  const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  if (status === "granted") {
    let fileUri = FileSystem.documentDirectory + "text.txt.png";
    await FileSystem.writeAsStringAsync(fileUri, "Hello World", { encoding: FileSystem.EncodingType.UTF8 });
  
   const ass = await MediaLibrary.createAssetAsync(fileUri)
   
    alert(`Image downloaded to the NEWFOLDER folder in your phone:  ${fileUri}`)
    console.log("file",ass)
  }
}
const Sdcard = { getSlothstatyi , saveFile}
