export const Routes = {
	HOME: '/',
	CREATE_GAME: '/create-game',
	LOBBY: '/lobby',
	GAME: '/game',
}

export enum GameSubjects {
	Food = 'Food',
	Cars = 'Cars',
	Dessert = 'Dessert',
}

export const firebaseConfig = {
	apiKey: 'AIzaSyD8oyMp7ZGVqSrxBRUMJaDRO6VAFmn6TX8',
	authDomain: 'pass-the-draw.firebaseapp.com',
	projectId: 'pass-the-draw',
	storageBucket: 'pass-the-draw.appspot.com',
	messagingSenderId: '863758399461',
	appId: '1:863758399461:web:c5705972a6c3c945bca10c',
	measurementId: 'G-81KK9F1ETD',
}


export const MINIMUM_PLAYERS_LENGTH = 3