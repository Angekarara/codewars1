function hero(bullets, dragons){
      const bulletsNeeded = dragons * 2;
      return bullets >= bulletsNeeded;
    }
    console.log(hero(7,6))