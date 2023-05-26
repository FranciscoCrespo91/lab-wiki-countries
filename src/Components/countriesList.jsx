

function CountriesList(props) {

    let {countries}=props
    
    return (
        <>
        {countries.map((country)=>{
            return(
                <div key={country._id}>
                    
                    
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2code.toLowerCase()}.png`} />
                    
                    <h3>{country.name.common}</h3>
                    
                </div>
            )
        })

        }
        </>
  )
}

export default CountriesList