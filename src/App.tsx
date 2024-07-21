import { Form } from 'components'

const App = () => (
	<div>
		<nav className='py-8 px-14'>
			<div className='flex w-fit items-center gap-3 mx-auto sm:m-0'>
				<img src='/icon.png' className='h-16 w-16' alt='' />
				<h1 className='text-3xl font-bold'>Make teams</h1>
			</div>
		</nav>
		<main className='w-full flex flex-col items-center'>
			<Form />
		</main>
	</div>
)

export default App
