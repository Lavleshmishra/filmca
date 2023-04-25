import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { Colors } from '../../common';
import { LinkButton, RoundedButton } from '../forms/button';
import styles from './styles'

const WarningModal = ({ isVisible, onAccept, business, onCancel, data }) => {
    return (
        <Modal
            isVisible={isVisible}
            animationIn='fadeIn'
            animationOut='fadeOut'
            style={{ justifyContent: 'center', alignItems: 'center', padding: 0, margin: 0 }}
        >
            <View style={styles.container}>
                <View style={[styles.modalHeader, { backgroundColor: Colors.RED, paddingHorizontal: 10 }]}>
                    <Text style={styles.headerText}>A business at this location already exists in our system. Would you like to proceed?</Text>
                </View>
                <View style={[styles.bottons, {
                    paddingVertical: 10,
                    paddingHorizontal: 10
                }]}>
                    <View>
                        <LabelView title="Business Name:" subtitle={business?.businessName || "-"} />
                        <LabelView title="Address:" subtitle={business?.businessAddress || "-"} />
                        <LabelView title="Contact Person:" subtitle={business?.fullName || "-"} />
                        <LabelView title="Phone Number:" subtitle={`${business?.countryCode}-${business?.phone}` || "-"} />
                        <LabelView title="Email Address:" subtitle={business?.email || "-"} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Text style={[styles.linkText, { fontSize: 16, fontWeight: 'bold' }]} onPress={() => onCancel()}>No</Text>
                        <Text style={[styles.linkText, { color: Colors.RED, fontSize: 16, paddingLeft: '8%', fontWeight: 'bold' }]} onPress={() => onAccept()}>Yes, I would like to proceed</Text>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const LabelView = ({ title, subtitle }) => {
    return (
        <View style={styles.labelView}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    )
}

export default WarningModal;