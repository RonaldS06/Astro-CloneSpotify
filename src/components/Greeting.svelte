<script lang="ts">
    const currentTime = new Date()
    const currentHour = currentTime.getHours()

    let greeting = ""

    if(currentHour < 5){
        greeting = "Empieza tu día con 🕺"
    }else if(currentHour < 12){
        greeting = "Buenos días ⛅"
    }else if(currentHour < 18){
        greeting = "Buenas tardes 🌞"
    }else{
        greeting = "Buenas noches🌛"
    }
</script>

<h1 class="text-4xl font-bold">{greeting}</h1>