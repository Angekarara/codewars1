function sayHello( name, city, state ) {
    const fullName = name.join(' ');
      const welcome = `Hello, ${fullName}! Welcome to ${city}, ${state}!`;
       
      return welcome;
      }

      console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'));