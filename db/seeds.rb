# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "clearing old data..."

User.destroy_all
Book.destroy_all
Author.destroy_all
BookAuthor.destroy_all
BookUser.destroy_all


puts "seeding users..."

5.times do User.create(
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  username: Faker::Twitter.unique.screen_name,
  email: Faker::Internet.unique.email,
  password_digest: Faker::Internet.unique.password
  )
end

puts "seeding books..."

50.times do Book.create(
  title: Faker::Book.title
  )
end

puts "seeding authors..."

55.times do Author.create(
  firstname: Faker::Name.first_name,
  lastname: Faker::Name.last_name,
  nametitle: ["Ph.D","", "", "MD", "" ].sample,
  bio: Faker::Lorem.paragraph
  )
end

puts "seeding book_authors..."

50.times do BookAuthor.create!(
  book_id: rand(1..50),
  author_id: rand(1..55)
 )
end

puts "seeding book_users..."

75.times do BookUser.create(
  book_id: rand(1..50),
  user_id: rand(1..5),
  tags: ["philosophy", "psychology", "mathematics", "computing", "programming", "economics", "science", "policy", "politics", "ethics", "self-help", "novel", "mystery", "historical fiction"].sample,
  description: Faker::Lorem.paragraph(sentence_count: 8),
  read_status: ["Not Begun", "In Progress", "Completed", "Abandoned"].sample,
  is_notes_added: [true, false].sample
  )
end

books = BookUser.all
books.each do |book|

  if book[:read_status] == "Not Begun"
    book[:rating] = nil
    book[:is_review_added] = false
    book.save
  elsif book[:read_status] == "In Progress" || book[:read_status] == "Completed"
    rating = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10].sample
    book[:rating] = rating
    random_bool = [true, false].sample
    book[:is_review_added] =random_bool
    book.save
  end

  if book[:is_notes_added] == true
    book[:notes] = Faker::Lorem.paragraph(sentence_count: 6, supplemental: true, random_sentences_to_add: rand(1..20))
    book.save
  end

  if book[:is_review_added] == true
    book[:review] = Faker::Lorem.paragraph(sentence_count: 15, supplemental: true, random_sentences_to_add: rand(1..30))
    book.save
  end
end

puts "done seeding all resources 🌱🌱🌱"