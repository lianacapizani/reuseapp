import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 16,
        backgroundColor: '#fff',
      },
      addAddressContent: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      addAddressBtn: {
        marginTop: 0,
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: '#f0f0f0',
      },
      addAddressText: {
        color: '#000',
        fontWeight: 'semibold',
      },
      localInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
      },
      
      localInfo: {
        fontSize: 14,
        color: '#333',
      },
      modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)',
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
      },
      modalTitle: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 'semibold',
      },
      input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 8,
        marginBottom: 16,
      },
      confirmBtn: {
        backgroundColor: '#016DAD',
        padding: 12,
        borderRadius: 8,
      },
      confirmText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
      },
    });