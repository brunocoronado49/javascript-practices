function fibonacci(number) {
    let a = 0;
    let b = 1;

    console.log(` ${a} ${b} `);
    
    for (let i = 0; i < number; i++) {
        let next = a + b;
        console.log(` ${next} `)
        a = b;
        b = next;    
    }

}

fibonacci(50);
