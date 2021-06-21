import React from 'react';
import { StyleSheet, View } from 'react-native';
import PDFReader from 'rn-pdf-reader-js'



export default function PdfView({ route }) {
    const { pdflink } = route.params
    return (
        <PDFReader
            source={{
                uri: pdflink,
            }}
        />
    );

}
