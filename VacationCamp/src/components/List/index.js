import React, {Component} from 'react';
import { 
    View, 
    Text,
    TextInput,
    ScrollView,
    ImageBackground } from  "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import Ionicon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { styles } from "./styles";
import themes from "../../themes";

export default class List extends Component{

  renderHeader = () =>{
    return (
      <View>
        <View style={[themes.row, styles.header, themes.center]}>
            <View style={{flex:0.1}}>
              <Ionicon name="ios-search" size={28}  color="#d2d3d2" />
            </View>
            <View style={{flex:1}}>
              <TextInput 
                placeholder="Search home,address,city..."
                placeholderTextColor="#d2d3d2"
                style={{fontSize:18}}
              />
            </View>
            <View style={{flex:0.1, paddingHorizontal:5}}>
              <Ionicon name="ios-search" size={30} color="#ff878d" />
            </View>
        </View>
        <View style={styles.subHeader}>
            <Text style={styles.subHeaderText}>Quick Search</Text>
        </View>
    </View>
    )
  }

  renderFilters = () =>{
    return (
        
          <View style={[themes.row, styles.filterContainer]}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
            >
                <View style={styles.filter}>
                    <Text style={styles.filterText}>Sublet</Text>
                </View>
                <View style={styles.filter}>
                    <Text style={styles.filterText}>Office Space</Text>
                </View>
                <View style={[styles.filter, styles.activeFilter]}>
                    <Text style={[styles.filterText, styles.activeText]}>4 Beds</Text>
                </View>
                <View style={styles.filter}>
                    <Text style={styles.filterText}>3 Beds</Text>
                </View>
                <View style={styles.filter}>
                    <Text style={styles.filterText}>2 Beds</Text>
                </View>
            </ScrollView>
          </View>
    )
  }

  renderCard = () => {
    
  }
  
  renderList = () =>{
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
          <View style={[themes.flex, styles.listContainer]}>
              <View style={styles.cardContainer}>
                  <ImageBackground 
                      source={require("../../assets/vacation_home1.jpg")}
                      style={[themes.column, styles.imageContainer]}
                  >
                    <View style={[themes.flex, themes.right]}>
                        <MaterialIcon name="bookmark" size={32} color="white" />
                    </View>
                    <View style={[themes.row, styles.addressContainer]}>
                        <MaterialIcon name="room" size={20} color="#fdfdfd" />
                        <Text style={styles.addressText}>California, USA 1212</Text>
                    </View>

                  </ImageBackground>
                  <View style={[themes.column, styles.cardContent]}>
                      <View style={[themes.row, {justifyContent:"space-between", alignItems:"center", marginBottom:10}]}>
                          <Text style={styles.priceText}>$1200</Text>
                          <Text style={styles.availability}>Avl:2 Sep, 2018</Text>
                      </View>
                      <View style={[themes.row, { justifyContent:"flex-start"}]}>
                          <View style={[themes.row, themes.flex, styles.iconContainer]}>
                              <MaterialCommunityIcon name="car" size={20} color="#8d85ff" />
                              <Text>4 Beds</Text>
                          </View>
                          <View style={[themes.row, themes.flex, styles.iconContainer]}>
                              <MaterialCommunityIcon name="shower" size={20} color="#ffa7ac" />
                              <Text>2 Bathrooms</Text>
                          </View>
                          <View style={[themes.row, themes.flex, styles.iconContainer]}>
                              <Ionicons name="ios-browsers" size={20} color="#ff88c7" />
                              <Text>16 sqft</Text>
                          </View>
                      </View>
                  </View>
              </View>
          </View>
      </ScrollView>
      
    )
  }
  render() {
    return (
        <View style={[themes.flex, styles.container]}>
            {this.renderHeader()}
            {this.renderFilters()}
            {this.renderList()}
        </View>
    );
  }
}
