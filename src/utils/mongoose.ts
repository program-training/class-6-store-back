import mongoose from 'mongoose'

const connectWithRetry = async (): Promise<void> => {
  const dbHost = process.env.DB_HOST ?? 'mongodb+srv://store_23:store_23@cluster0.kcamuno.mongodb.net/stores_db?retryWrites=true&w=majority'
  let isConnect = false
  for (let retries = 10; retries > 0; retries--) {
    try {
      await mongoose.connect(dbHost)
      isConnect = true
      console.log('Connected to MongoDB')
      break
    } catch (error) {
      console.error('Error connecting to MongoDB:', error)
      console.log(`Retries left: ${retries}`)
      await new Promise((resolve) => setTimeout(resolve, 5000)) // Wait for 5 seconds before retrying
    }
  }
  if (!isConnect) {
    console.error('Failed to connect to MongoDB after multiple attempts.')
  }
}

export const connectToDatabase = async (): Promise<void> => {
  try {
    await connectWithRetry()
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
    process.exit(1)
  }
}

// export const connectToDatabase = async () => {
//   try {
//     await mongoose.connect(process.env.DB_HOST || 'mongodb+srv://store_23:store_23@cluster0.kcamuno.mongodb.net/stores_db?retryWrites=true&w=majority');
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//     process.exit(1);
//   }
// }
