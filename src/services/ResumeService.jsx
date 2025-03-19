import { db , auth} from "../firebaseConfig";
import { doc, setDoc, getDoc} from "firebase/firestore";

// Save resume link to Firestore
export const saveResume = async (resumeLink) => {
  try {
    await setDoc(doc(db, "settings", "resume"), { link: resumeLink }); // ✅ Fix: Wrap in an object
    return true;
  } catch (error) {
    console.error("Error Updating Resume:", error);
    return false;
  }
};
// Fetch resume link from Firestore
export const getResume = async () => {
  try {
    const docSnap = await getDoc(doc(db, "settings", "resume"));
    if (docSnap.exists()) {
      return docSnap.data().link;
    } else {
      console.error("No resume found in Firestore.");
      return null;
    }
  } catch (error) {
    console.error("Error fetching resume:", error);
    return null;
  }
};