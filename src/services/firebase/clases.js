import { firestore } from "../../utils/firebase";
import { getDocs, collection } from "firebase/firestore";

export const getClases = async () => {
  try {
    const clasesSnapshot = await getDocs(collection(firestore, "clases"));

    const clasesList = clasesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return clasesList;
  } catch (error) {
    console.error("Error al obtener clases:", error);
    throw error;
  }
};

const addClase = async (clase) => {};

const updateClase = async (id, updatedClase) => {};

const deleteClase = async (id) => {};

const getClase = async (id) => {};
