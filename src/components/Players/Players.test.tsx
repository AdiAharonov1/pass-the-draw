import { aPlayer } from '@test-utils'
import { PlayerRoles } from '@types'
import { playersDriver } from './Players.driver'
import * as stylesheet from './Players.st.css'

describe('Players', () => {

	const players = [ aPlayer(), aPlayer({ role: PlayerRoles.Regular }) ]
	const [ currentPlayer, otherPlayer ] = players
	const driver = playersDriver({
		props: { currentPlayerId: currentPlayer!.id!, players },
		stylesheet,
	}).beforeAndAfter()

	it('should render players', () => {
		const playersTestkit = driver.testkit().players()

		playersTestkit.forEach((playerTestkit, index) => {
			const player = players[ index ]

			expect(playerTestkit.image()).toHaveAttribute('src', player!.image)
			expect(playerTestkit.text()).toEqual(player!.name)
		})
	})

	it('should add currentPlayer state to the current user', () => {
		const playerTestkit = driver.testkit().player(0)

		expect(playerTestkit.text()).toEqual(currentPlayer!.name)
		expect(driver.styleUtils().hasStyleState(playerTestkit.element()!, 'currentPlayer')).toBeTruthy()
	})

	it('should not add currentPlayer state to the other user', () => {
		const playerTestkit = driver.testkit().player(1)

		expect(playerTestkit.text()).toEqual(otherPlayer!.name)
		expect(driver.styleUtils().hasStyleState(playerTestkit.element()!, 'currentPlayer')).toBeFalsy()
	})
})