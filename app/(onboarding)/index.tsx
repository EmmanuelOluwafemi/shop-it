import { FlatList, Image, SafeAreaView, StyleSheet } from "react-native";
import { Dimensions } from "react-native";

import { Text, View } from "../../components/Themed";
import { onboardingSteps } from "../../constants";
import {
  OnboardingPagingDots,
  OnboardingSliderContent,
} from "../../components/auth";
import { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";

const windowWidth = Dimensions.get("window").width;

export default function OnboardingScreen() {
  const currentIndex = useRef(0);
  const [pagingIndex, setPagingIndex] = useState(0);
  const imageFlatList = useRef<FlatList>(null);
  const contentFlatList = useRef<FlatList>(null);

  const [isLastItem, setIsLastItem] = useState(false);

  const handleNextPress = () => {
    if (currentIndex.current < onboardingSteps.length - 1) {
      currentIndex.current += 1;
      setPagingIndex(currentIndex.current);
      imageFlatList.current?.scrollToIndex({
        index: currentIndex.current,
        animated: true,
      });
      contentFlatList.current?.scrollToIndex({
        index: currentIndex.current,
        animated: true,
      });

      // check if last item
      if (currentIndex.current === onboardingSteps.length - 1) {
        setIsLastItem(true);
      }
    }
  };

  // TODO: Allow sliding back to previous screen
  // TODO: Remember users previous onboarding state

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* illustration list */}
        <View style={{ flex: 2 }}>
          <FlatList
            ref={imageFlatList}
            horizontal
            pagingEnabled
            scrollEnabled={false}
            snapToAlignment="center"
            snapToInterval={windowWidth}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            data={onboardingSteps}
            keyExtractor={(item) => `onboarding_screens_image_${item.id}`}
            renderItem={({ item }) => (
              <View
                style={{
                  width: windowWidth,
                  alignItems: "center",
                }}
              >
                <Image
                  resizeMode="contain"
                  source={item.image}
                  style={{ width: windowWidth - 72 }}
                />
              </View>
            )}
          />

          <OnboardingPagingDots activeIndex={pagingIndex} />
        </View>

        {/* Title and content */}
        <FlatList
          ref={contentFlatList}
          horizontal
          pagingEnabled
          scrollEnabled={false}
          snapToAlignment="center"
          snapToInterval={windowWidth}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          data={onboardingSteps}
          keyExtractor={(item) => `onboarding_screens_content_${item.id}`}
          renderItem={({ item }) => (
            <View style={{ width: windowWidth }}>
              <OnboardingSliderContent
                title={item.title}
                description={item.description}
                onPress={handleNextPress}
                isLast={isLastItem}
              />
            </View>
          )}
        />
      </View>

      <StatusBar translucent />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
