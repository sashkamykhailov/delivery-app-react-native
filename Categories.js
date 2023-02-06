import { ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView 
    contentContainerStyle={{
        paddingTop: 10,
    }}
    horizontal 
    showsHorizontalScrollIndicator={false}>
      <CategoryCard 
      imgUrl='https://www.justonecookbook.com/wp-content/uploads/2020/01/Sushi-Rolls-Maki-Sushi-%E2%80%93-Hosomaki-1106-II.jpg' 
      title='Sushi' />
      <CategoryCard 
      imgUrl='https://cdn.aniagotuje.com/pictures/articles/2022/08/31553101-v-1080x1080.jpg' 
      title='Pizza' />
      <CategoryCard 
      imgUrl='https://cookingwithayeh.com/wp-content/uploads/2021/06/Homemade-Falafel-01-683x1024.jpg' 
      title='Falafel' />
      <CategoryCard 
      imgUrl='https://www.justonecookbook.com/wp-content/uploads/2020/01/Sushi-Rolls-Maki-Sushi-%E2%80%93-Hosomaki-1106-II.jpg' 
      title='Sushi' />
      <CategoryCard 
      imgUrl='https://cdn.aniagotuje.com/pictures/articles/2022/08/31553101-v-1080x1080.jpg' 
      title='Pizza' />
      <CategoryCard 
      imgUrl='https://cookingwithayeh.com/wp-content/uploads/2021/06/Homemade-Falafel-01-683x1024.jpg' 
      title='Falafel' />
    </ScrollView>
  )
}

export default Categories