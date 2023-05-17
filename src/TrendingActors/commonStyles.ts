export const actorDetailsStyles = (mainThemeColorSecondary: string) => {
    return {
        display: 'flex',
        justifyContent: 'space-between',
        width: '550px',
        border: `2px ${mainThemeColorSecondary} solid`,
        padding: '2rem',
        borderImage: `linear-gradient(45deg, ${mainThemeColorSecondary} 1%, transparent 12%) 2`,
        marginTop: '1.5rem',
    }
}

export const actorInfoStyles = {
    width: '60%',
    padding: '0.3rem',
    marginRight: '1.5rem',
}

export const actorNameStyles = {
    fontSize: { xs: '24px', md: '32px', lg: '40px' },
    fontWeight: 'bold',
}

export const knownForStyles = {
    fontSize: '1rem',
    color: '#fc7b03',
    fontWeight: 'bold',
}

export const actorRoleOverviewStyles = (textColor: string) => {
    return {
        color: textColor,
        marginBottom: '10px',
        opacity: '70%',
    }
}

export const actorImageStyles = {
    borderRadius: '50px',
    boxShadow: '8px 8px 12px -5px rgba(0, 0, 0, 1)',
    height: 'auto',
    alignSelf: 'center',
    objectPosition: 'center top',
}

export const knownForWrapperStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontStyle: 'italic',
    marginY: '.5rem',
}
