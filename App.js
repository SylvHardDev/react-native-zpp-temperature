import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Assuming you're using React Navigation
// import { FontAwesome } from '@expo/vector-icons'; 

const Header = () => {
  const navigation = useNavigation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <View style={styles.header}>
      <View style={styles.navWrapper}>
        <TouchableOpacity onPress={toggleMenu} style={styles.mobileMenu}>
          <Text style={styles.closeIcon}>❌</Text>
        </TouchableOpacity>

        <View style={styles.navigation}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>
              Visio<Text style={styles.logoSpan}>medico.</Text>
            </Text>
          </View>

          <View style={isMenuOpen ? styles.menuActive : styles.menu}>
            <TouchableOpacity onPress={toggleMenu} style={styles.mobileMenuClose}>
              <Text style={styles.closeIcon}>❌</Text>
            </TouchableOpacity>
            <View style={styles.navItem}>
              <TouchableOpacity
                onPress={() => {
                  toggleMenu();
                  navigation.navigate('Home'); // Use your navigation routes
                }}
                style={styles.navLink}
              >
                <Text style={styles.navText}>Home</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.navItem}>
              <TouchableOpacity
                onPress={() => {
                  toggleMenu();
                  navigation.navigate('Doctor'); // Use your navigation routes
                }}
                style={styles.navLink}
              >
                <Text style={styles.navText}>Docteurs</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.navItem}>
              <TouchableOpacity
                onPress={() => {
                  toggleMenu();
                  navigation.navigate('Service'); // Use your navigation routes
                }}
                style={styles.navLink}
              >
                <Text style={styles.navText}>Services</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.navItem}>
              <TouchableOpacity
                onPress={() => {
                  toggleMenu();
                  navigation.navigate('Autre'); // Use your navigation routes
                }}
                style={styles.navLink}
              >
                <Text style={styles.navText}>Autre</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.loginLogout}>
          <View style={styles.login}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={styles.loginButton}
            >
              <Text style={styles.loginButtonText}>Signin</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.logout}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Register')}
              style={styles.signupButton}
            >
              <Text style={styles.signupButtonText}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
