import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { shuffleArray } from '../../helpers'

type FormData = {
	people: number
	teams: number
}

const Form = () => {
	const [teams, setTeams] = useState<number[][] | null>(null)
	const { register, handleSubmit } = useForm<FormData>()

	const onSubmit = (data: FormData) => {
		const { people: peopleAmount, teams: teamsAmount } = data

		const teams: number[][] = Array.from({ length: teamsAmount }).map(() => [])

		const players = shuffleArray(
			Array.from({ length: peopleAmount }).map((_, index) => index + 1)
		)

		for (let i = 0; i < players.length; i++) {
			const teamIndex = i % teamsAmount
			teams[teamIndex].push(players[i])
		}

		teams.reverse()

		setTeams(teams)
	}

	return (
		<>
			<form
				className='bg-neutral-600 mt-24 rounded-xl px-12 py-5 w-80'
				onSubmit={handleSubmit(onSubmit)}
			>
				<h2 className='text-center text-2xl font-semibold'>Create teams</h2>
				<div className='flex justify-between items-center mt-3'>
					<label htmlFor='people' className='text-xl ont-semibold'>
						People:
					</label>
					<input
						type='number'
						id='people'
						className='w-1/2 border-2 rounded-lg border-neutral-500 text-center bg-transparent text-xl'
						placeholder='0'
						{...register('people')}
					/>
				</div>
				<div className='flex items-center justify-between mt-2'>
					<label htmlFor='teams' className='text-xl font-semibold'>
						Teams:
					</label>
					<input
						type='number'
						id='teams'
						className='w-1/2 border-2 rounded-lg border-neutral-500 text-center bg-transparent text-xl'
						placeholder='0'
						{...register('teams')}
					/>
				</div>

				<button
					type='submit'
					className='bg-green-600 mt-3.5 mx-auto block px-4 font-semibold py-0.5 rounded-md'
				>
					Generate
				</button>
			</form>
			{teams && (
				<div className='flex flex-wrap justify-center my-4 gap-2.5 w-[360px]'>
					{teams.map((team) => (
						<div
							className='flex gap-3 bg-neutral-600 px-4 py-1 rounded-md'
							key={`t${team}`}
						>
							{team.map((player) => (
								<h3 key={`p${player}`} className='font-semibold'>
									{player}
								</h3>
							))}
						</div>
					))}
				</div>
			)}
		</>
	)
}

export default Form
