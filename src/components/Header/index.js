import React, { useContext } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Flex, Box } from '@rebass/grid/emotion'

import StoreContext from '../../context/StoreContext'

const Wrapper = styled.div({
	background: `black`,
	marginBottom: `1.45rem`,
})

const CartCounter = styled.span({
	backgroundColor: `white`,
	color: `#663399`,
	borderRadius: `20px`,
	padding: `0 10px`,
	fontSize: `1.2rem`,
	float: `right`,
	margin: `-10px`,
	zIndex: 999,
})

const H1 = props => (
	<h1
		style={{
			margin: 0,
		}}
	>
		<Link
			{...props}
			style={{
				color: `white`,
				textDecoration: `none`,
			}}
		>
			{props.children}
		</Link>
	</h1>
)

const Container = props => (
	<Flex
		{...props}
		mx='auto'
		px={[`1.0875rem`, null, null, 0]}
		py='1.45rem'
		css={{
			margin: `0 auto`,
			maxWidth: 960,
		}}
	/>
)

const Header = ({ siteTitle, siteDescription }) => {
	const context = useContext(StoreContext)

	const { lineItems } = context.checkout

	return(
		<Wrapper>
			<Container>
				<Box>
					<H1 to='/'>
						{siteTitle}
					</H1>
					<p>{siteDescription}</p>
				</Box>
				<Box ml='auto'>
					<H1 to='/cart'>
						{lineItems.length !== 0 &&
							<CartCounter>
								{lineItems.length}
							</CartCounter>
						}
						Cart 🛍
					</H1>
				</Box>
			</Container>
		</Wrapper>
	)
}

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
