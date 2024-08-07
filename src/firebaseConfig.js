import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
	apiKey: 'AIzaSyAhvtZqpr3K5f5leTOKMTI18SVfXqXydT0',
	authDomain: 'delivery-78160.firebaseapp.com',
	projectId: 'delivery-78160',
	storageBucket: 'delivery-78160.appspot.com',
	messagingSenderId: '844549620583',
	appId: '1:844549620583:web:b8dd90c3033ffce38965c2',
	measurementId: 'G-DX59BNQSMS',
}

const app = initializeApp(firebaseConfig)
const storage = getStorage(app)

export { storage }
