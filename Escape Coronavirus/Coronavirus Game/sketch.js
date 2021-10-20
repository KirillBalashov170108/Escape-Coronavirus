    var doctor, vaccine, vaccine2, facemask, coronavirus, coronavirus2, coronavirus3, coronavirus4;
    var canvas;
    var coronavirusGroup, facemaskGroup, vaccineGroup, coronavirus2Group, coronavirus3Group, coronavirus4Group;
    var score =0;
    var backBoard
    var flag=false

    var life =3;
    var score=0;
    var gameState=1

    function preload(){
      //loading images and sounds
      backgroundImg = loadImage("background.jpeg")
      
      doctorImg = loadImage("doctor.png")
      
      vaccineImg = loadImage("vaccine.png")
      vaccine2Img = loadImage("vaccine2.png")

      backBoardImg = loadImage("back.jpg")
      
      coronavirusImg = loadImage("coronavirus.png")
      coronavirus2Img = loadImage("coronavirus2.png")
      coronavirus3Img = loadImage("coronavirus3.png")
      coronavirus4Img = loadImage("coronavirus4.png")

      lifeImg = loadImage("life.png")
      
      facemaskImg = loadImage("facemask.png")
      
      soundhit = loadSound("sound.mp3")
      soundhit2 = loadSound("sound2.mp3")
      soundbackground = loadSound("sound1.mp3")
    }

    function setup(){
      createCanvas(800,820);
      //creating new sprites
      backBoard= createSprite(15, width/3, 100, height);
      backBoard.addImage(backBoardImg)
      backBoard.scale=0.7

      doctor = createSprite(150, width/2, 100,height);
      doctor.addImage(doctorImg)
      doctor.scale=0.17
      doctor.debug=false
      doctor.setCollider("rectangle",-200,0,130,750)

      lifeheart= createSprite(260,60)
      lifeheart.addImage(lifeImg)
      lifeheart.scale=0.1

      mute_btn = createImg('mute.png')
      mute_btn.position(width-60,5);
      mute_btn.size(40,40)
      mute_btn.mouseClicked(mute)

      lifeheart2= createSprite(300,60)
      lifeheart2.addImage(lifeImg)
      lifeheart2.scale=0.1


      lifeheart3= createSprite(340,60)
      lifeheart3.addImage(lifeImg)
      lifeheart3.scale=0.1

      //creating new groups
      vaccineGroup = createGroup();
      coronavirusGroup = createGroup();
      coronavirus2Group = createGroup();
      coronavirus3Group = createGroup();
      coronavirus4Group = createGroup();
      facemaskGroup = createGroup();
      //creating elements
      heading= createElement("h1");
      scoreboard= createElement("h1")
      
      soundbackground.play();
    }

    function draw(){
      background(backgroundImg);
      

      heading.html("Life: ")
      heading.style('color:red');
      heading.position(170,20)

      scoreboard.html("Score: "+score)
      scoreboard.style('color:red');
      scoreboard.position(width-200,20)

      if(gameState===1){
        doctor.y=mouseY  

        if(frameCount % 100 === 0){
          drawcoronavirus();
        }
      
        if(frameCount % 200 === 0){
          drawcoronavirus2();
        }
      
        if(frameCount % 300 === 0){
          drawcoronavirus3();
        }
        
        if(frameCount % 350 === 0){
          drawcoronavirus4();
        }

        if(frameCount % 500 === 0){
          drawfacemask();
        }
      
        if(keyDown("space")){
          shootVaccine();
        }
        for (var i = 0; i < coronavirusGroup.length; i++) 
        { if(backBoard.isTouching(coronavirusGroup.get(i)))
          { 
          coronavirusGroup.get(i).destroy(); 
          soundhit.play()
          handleGameover(coronavirusGroup);
         } }
        //if (coronavirusGroup.collide(backBoard)){
        // handleGameover(coronavirusGroup);
        //}
        for (var i = 0; i < coronavirus2Group.length; i++) 
        { if(backBoard.isTouching(coronavirus2Group.get(i)))
          { 
          coronavirus2Group.get(i).destroy(); 
          soundhit.play()
          handleGameover(coronavirus2Group);
         } }
        //if (coronavirus2Group.collide(backBoard)){
        //  handleGameover(coronavirus2Group);
        //}
        for (var i = 0; i < coronavirus3Group.length; i++) 
        { if(backBoard.isTouching(coronavirus3Group.get(i)))
          { 
          coronavirus3Group.get(i).destroy(); 
          soundhit.play()
          handleGameover(coronavirus3Group);
         } }
        //if (coronavirus3Group.collide(backBoard)){
         // handleGameover(coronavirus3Group);
        //}
        for (var i = 0; i < coronavirus4Group.length; i++) 
        { if(backBoard.isTouching(coronavirus4Group.get(i)))
          { 
          coronavirus4Group.get(i).destroy(); 
          soundhit.play()
          handleGameover(coronavirus4Group);
         } }
        //if (coronavirus4Group.collide(backBoard)){
        //  handleGameover(coronavirus4Group);
       // }
/*
        if (facemaskGroup.collide(doctor)){
          flag=true
          facemaskGroup.destroyEach()
          if (life<3){
            life=life+1
            console.log(life)
          }
          
        }
*/
        for (var i = 0; i < facemaskGroup.length; i++) 
        { if(doctor.isTouching(facemaskGroup.get(i)))
          { 
            flag=true
            if (life<3){
              life=life+1
              console.log(life)
            }
            if(life===1){
              lifeheart.visible=true
              lifeheart2.visible=false
              lifeheart3.visible=false
            }else if(life===2){
              lifeheart.visible=true
              lifeheart2.visible=true
              lifeheart3.visible=false
            }else if(life===3){
              lifeheart.visible=true
              lifeheart2.visible=true
              lifeheart3.visible=true
            }
          facemaskGroup.get(i).destroy(); 
          soundhit2.play()
           } }

        for (var i = 0; i < coronavirusGroup.length; i++) 
        { if(vaccineGroup.isTouching(coronavirusGroup.get(i)))
          { score = score + 100;
          coronavirusGroup.get(i).destroy(); 
          soundhit.play()
          vaccineGroup.destroyEach(); } }

        for (var i = 0; i < coronavirus2Group.length; i++) 
        { if(vaccineGroup.isTouching(coronavirus2Group.get(i)))
          { score = score + 100;
          coronavirus2Group.get(i).destroy(); 
          soundhit.play()
          vaccineGroup.destroyEach(); } }

        for (var i = 0; i < coronavirus3Group.length; i++) 
        { if(vaccineGroup.isTouching(coronavirus3Group.get(i)))
          { score = score + 100;
          coronavirus3Group.get(i).destroy(); 
          soundhit.play()
          vaccineGroup.destroyEach(); } }

        for (var i = 0; i < coronavirus4Group.length; i++) 
      { if(vaccineGroup.isTouching(coronavirus4Group.get(i)))
        { score = score + 100;
          coronavirus4Group.get(i).destroy(); 
          soundhit.play()
          vaccineGroup.destroyEach(); } }
        
        /* if (coronavirusGroup.collide(vaccineGroup)){
          handlecoronavirusCollision(coronavirusGroup)
          coronavirusGroup.destroyEach()
          vaccineGroup.destroyEach()
        }

        if (coronavirus2Group.collide(vaccineGroup)){
          handlecoronavirusCollision(coronavirus2Group)
          coronavirus2Group.destroyEach()
          vaccineGroup.destroyEach()
        }

        if (coronavirus3Group.collide(vaccineGroup)){
          handlecoronavirusCollision(coronavirus3Group)
          coronavirus3Group.destroyEach()
          vaccineGroup.destroyEach()
        }

        if (coronavirus4Group.collide(vaccineGroup)){
          handlecoronavirusCollision(coronavirus4Group)
          coronavirus4Group.destroyEach()
          vaccineGroup.destroyEach()
        } 
        */
        drawSprites();
    }

    }

    function drawcoronavirus(){
      coronavirus = createSprite(800,random(20,780),40,40);
      coronavirus.addImage(coronavirusImg);
      coronavirus.scale = 0.15;
      coronavirus.velocityX = -4;
      coronavirus.lifetime = 5000;
      //coronavirus.debug = true
      coronavirus.setCollider("rectangle",20,-10,50,50)
      coronavirusGroup.add(coronavirus);
    }
    function drawcoronavirus2(){
      coronavirus2 = createSprite(800,random(20,780),40,40);
      coronavirus2.addImage(coronavirus2Img);
      coronavirus2.scale = 0.15;
      coronavirus2.velocityX = -4;
      coronavirus2.lifetime = 1000;
      //coronavirus2.debug = true
      coronavirus2.setCollider("rectangle",20,-10,50,50)
      coronavirus2Group.add(coronavirus2);
    }
    function drawcoronavirus3(){
      coronavirus3 = createSprite(800,random(20,780),40,40);
      coronavirus3.addImage(coronavirus3Img);
      coronavirus3.scale = 0.15;
      coronavirus3.velocityX = -4;
      coronavirus3.lifetime = 1000;
      //coronavirus3.debug = true
      coronavirus3.setCollider("rectangle",20,-10,50,50)
      coronavirus3Group.add(coronavirus3);
    }
    function drawcoronavirus4(){
      coronavirus4 = createSprite(800,random(20,780),40,40);
      coronavirus4.addImage(coronavirus4Img);
      coronavirus4.scale = 0.15;
      coronavirus4.velocityX = -4;
      coronavirus4.lifetime = 1000;
      //coronavirus4.debug = true
      coronavirus4.setCollider("rectangle",20,-10,50,50)
      coronavirus4Group.add(coronavirus4);
    }
    function drawfacemask(){
      facemask=createSprite(800,random(20,780),40,40)
      facemask.addImage(facemaskImg);
      facemask.scale = 0.10;
      facemask.velocityX = -4;
      facemask.lifetime = 1000;
      facemask.debug = true
      facemaskGroup.add(facemask);
     

    }
    function shootVaccine(){
      vaccine= createSprite(150, width/2, 50,20)
      vaccine.y= doctor.y-20
      if (flag===false){
        vaccine.addImage(vaccineImg)
      }else{
        vaccine.addImage(vaccine2Img)
      }
      vaccine.scale=0.08
      vaccine.velocityX= 7
      vaccineGroup.add(vaccine)
    }
    function handlecoronavirusCollision(coronavirusGroup){
      if (life > 0) {
        score=score+1
      }
    }
    function handlecoronavirusCollision(coronavirus2Group){
      if (life > 0) {
        score=score+1
      }
    }
    function handlecoronavirusCollision(coronavirus3Group){
      if (life > 0) {
        score=score+1
      }
    }
    function handlecoronavirusCollision(coronavirus4Group){
      if (life > 0) {
        score=score+1
      }
    }
    function handleGameover(coronavirusGroup){
      life=life-1
    //  coronavirusGroup.destroyEach();
console.log("life",life)
      if(life===1){
        lifeheart.visible=true
        lifeheart2.visible=false
        lifeheart3.visible=false
      }else if(life===2){
        lifeheart.visible=true
        lifeheart2.visible=true
        lifeheart3.visible=false
      }else if(life===3){
        lifeheart.visible=true
        lifeheart2.visible=true
        lifeheart3.visible=true
      }
      if (life === 0){
        gameState=2
        lifeheart.visible=false
        lifeheart2.visible=false
        lifeheart3.visible=false

        swal({
          title: `Game Over`,
          text: "Oops you lost the game....!!!",
          text: "Your Score is " + score,
          imageUrl:
            "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
          imageSize: "100x100",
          confirmButtonText: "Thanks For Playing"
        });
      }
    }
    function handleGameover(coronavirus2Group){
      life=life-1
      //coronavirus2Group.destroyEach();
      console.log("life",life)

      if(life===1){
        lifeheart.visible=true
        lifeheart2.visible=false
        lifeheart3.visible=false
      }else if(life===2){
        lifeheart.visible=true
        lifeheart2.visible=true
        lifeheart3.visible=false
      }else if(life===3){
        lifeheart.visible=true
        lifeheart2.visible=true
        lifeheart3.visible=true
      }

      if (life === 0){
        gameState=2
        lifeheart.visible=false
        lifeheart2.visible=false
        lifeheart3.visible=false

        swal({
          title: `Game Over`,
          text: "Oops you lost the game....!!!",
          text: "Your Score is " + score,
          imageUrl:
            "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
          imageSize: "100x100",
          confirmButtonText: "Thanks For Playing"
        });
      }
    }
    function handleGameover(coronavirus3Group){
      life=life-1
     // coronavirus3Group.destroyEach();
      console.log("life",life)

      if(life===1){
        lifeheart.visible=true
        lifeheart2.visible=false
        lifeheart3.visible=false
      }else if(life===2){
        lifeheart.visible=true
        lifeheart2.visible=true
        lifeheart3.visible=false
      }else if(life===3){
        lifeheart.visible=true
        lifeheart2.visible=true
        lifeheart3.visible=true
      }

      if (life === 0){
        gameState=2
        lifeheart.visible=false
        lifeheart2.visible=false
        lifeheart3.visible=false

        swal({
          title: `Game Over`,
          text: "Oops you lost the game....!!!",
          text: "Your Score is " + score,
          imageUrl:
            "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
          imageSize: "100x100",
          confirmButtonText: "Thanks For Playing"
        });
      }
    }
    function handleGameover(coronavirus4Group){
      life=life-1
      //coronavirus4Group.destroyEach();
      console.log("life",life)

      if(life===1){
        lifeheart.visible=true
        lifeheart2.visible=false
        lifeheart3.visible=false
      }else if(life===2){
        lifeheart.visible=true
        lifeheart2.visible=true
        lifeheart3.visible=false
      }else if(life===3){
        lifeheart.visible=true
        lifeheart2.visible=true
        lifeheart3.visible=true
      }

      if (life === 0){
        gameState=2
        lifeheart.visible=false
        lifeheart2.visible=false
        lifeheart3.visible=false

        swal({
          title: `Game Over`,
          text: "Oops you lost the game....!!!",
          text: "Your Score is " + score,
          imageUrl:
            "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
          imageSize: "100x100",
          confirmButtonText: "Thanks For Playing"
        });
      }
    }
    // creating mute button
    function mute()
    {
      if(soundbackground.isPlaying())
        {
          soundbackground.stop();
        }
        else{
          soundbackground.play();
        }
        }