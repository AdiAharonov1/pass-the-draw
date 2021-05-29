import type { GameSubjects } from './constants'

export interface ISubjects {
	value: GameSubjects
}

export interface CreateGameParams {
  word: string;
  subject: GameSubjects
}

export interface Game extends CreateGameParams {
	id: string
	startTime: number
	players: Player[]
	endTime?: number
	currentPlayingIndex?: number
	winner?: Player
}

export interface Player {
	id?: string
	name: string
	image?: string
	role: PlayerRoles
}

export enum PlayerRoles {
	Admin = 'Admin',
	Regular = 'Regular'
}