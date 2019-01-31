let request = async ()=>{
    try {
        const response = await fetch(`https://test.call/endpoint`);
        if (response.ok){
            const jsonResponse = await response.json();
            let name = jsonResponse.name;
        }
        throw new Error('Failed');
    } catch (error) {
        console.log(error);
    }
};