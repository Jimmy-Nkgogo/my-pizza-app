import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  PixelRatio,
  ScrollView,
} from "react-native";
import React from "react";
import StoreButton from "../components/StoreButton";
import ImageComponent from "../components/ImageComponent";

const MenuScreen = () => {
  const pizzaImg = require("../assets/pizza1.jpg");
  const savaFlava = require("../assets/sava-flava.jpg");
  const pizzaPie = require("../assets/pizza-pie.jpg");
  const healthyBerries = require("../assets/healthy.jpg");
  const pastaImg = require("../assets/pasta.jpg");
  const croissant = require("../assets/croissant.jpg");
  const salad = require("../assets/Salad.jpg");
  const drink = require("../assets/drink.jpg");

  return (
    <View style={styles.container}>
      <StoreButton title="Phalaborwa" />
      <ScrollView>
        <View
          style={{ alignItems: "center", flex: 1, width: "95%", marginTop: 15 }}
        >
          {/* buttons */}
          <View style={styles.centeredViews}>
            <TouchableOpacity style={styles.darkBlueBtn}>
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 18 }}
              >
                SPECIALS
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.darkBlueBtn} activeOpacity={0.7}>
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 18 }}
              >
                FAVOURITES
              </Text>
            </TouchableOpacity>
            {/* Food */}
          </View>
          <View style={styles.centeredViews}>
            <ImageComponent image={pizzaImg} location="Pizza" title="PIZZA" />
            <ImageComponent
              image={savaFlava}
              location="SavaFlava"
              title="SAVA FLAVA"
            />
          </View>
          <View style={styles.centeredViews}>
            <ImageComponent
              image={pizzaPie}
              location="PizzaPie"
              title="PIZZA PIES"
            />
            <ImageComponent
              image={healthyBerries}
              location="Dessert"
              title="DESSERT"
            />
          </View>
          <View style={styles.centeredViews}>
            <ImageComponent image={pastaImg} location="Pasta" title="PASTA" />
            <ImageComponent image={salad} location="Salads" title="SALADS" />
          </View>
          <View style={styles.centeredViews}>
            <ImageComponent
              image={croissant}
              location="Starters"
              title="STARTERS"
            />
            <ImageComponent image={drink} location="Drinks" title="DRINKS" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
  },
  darkBlueBtn: {
    backgroundColor: "darkblue",
    paddingVertical: 25,
    paddingHorizontal: 25,
    borderRadius: 12,
    elevation: 25,
  },
  centeredViews: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
    marginVertical: 10,
    gap: 10,
  },
});
