module Cards exposing (..)

type alias Property =
  {
    description: String
  }

type Kind
  = Reflex
  | Discipline
  | Brawn
  | Fortune
  | Unknown

type alias CardId = Int

type alias Card =
  {
    id: CardId,
    title: String,
    properties: List Property,
    kind: Kind
  }

dummyCard : Int -> Card
dummyCard i = { id = i, title = "Dummy Card " ++ (String.fromInt i), properties = [ Property "foo", Property "bar" ], kind = Unknown}

cards : List Card
cards = [
      {
          title =  "Adrenaline Fueled ",
          properties = 
          [
              "+ 100% Stamina",
              "- 75% Stamina Regeneration",
              "When you kill an enemy, gain 10 Stamina instantly and an additional 10 Stamina over 5 seconds."
          ],
          kind = "Reflex"
      },
      {
          title =  "Brazen ",
          properties = 
          [
              "+30% melee stamina efficiency",
              "+30% melee attack speed",
              "-5% damage resistance"
          ],
          kind = "Reflex"
      },
      {
          title =  "Breakout ",
          properties = 
          [
              "Allows you to free yourself from grabs",
              "+50% breakout cooldown reduction"
          ],
          kind = "Reflex"
      },
      {
          title =  "Cocky ",
          properties = 
          [
              "+75% weapon swap speed",
              "When you take damage your accuracy is reduced by 20% for 3 seconds"
          ],
          kind = "Reflex"
      },
      {
          title =  "Combat Medic ",
          properties = 
          [
              "Teammates healed by an additional 20 health when revived",
              "+50 use speed"
          ],
          kind = "Reflex"
      },
      {
          title =  "Cross Trainers ",
          properties = 
          [
              "+20% stamina",
              "+20% stamina regen",
              "+3% move speed",
              "5 health"
          ],
          kind = "Reflex"
      },
      {
          title =  "Dash ",
          properties = 
          [
              "+5% move speed"
          ],
          kind = "Reflex"
      },
      {
          title =  "Energy Drink ",
          properties = 
          [
              "+40% stamina",
              "-5% damage resistance "
          ],
          kind = "Reflex"
      },
      {
          title =  "Evasive Action ",
          properties = 
          [
              "Gain a 20% movement speed boost for three seconds when you take a hit of 10 or more"
          ],
          kind = "Reflex"
      },
      {
          title =  "Fire in the Hole! ",
          properties = 
          [
              "Gain 20 temporary health and 20% movement speed for five seconds after throwing an offensive item"
          ],
          kind = "Reflex"
      },
      {
          title =  "Fire in the Hole! ",
          properties = 
          [
              "When you throw an Offensive Accessory",
              "gain 20 temporary health and 20% move speed for 5 seconds."
          ],
          kind = "Reflex"
      },
      {
          title =  "Fleet Of Foot ",
          properties = 
          [
              "+10% move speed",
              "-5% damage resistance"
          ],
          kind = "Reflex"
      },
      {
          title =  "Glass Cannon ",
          properties = 
          [
              "+25% damage",
              "-30% health"
          ],
          kind = "Reflex"
      },
      {
          title =  "Guns Out ",
          properties = 
          [
              "+50% weapon swap speed",
              "-5% damage resistance"
          ],
          kind = "Reflex"
      },
      {
          title =  "Headband Magnifier ",
          properties = 
          [
              "+125% use speed",
              "when you take damage",
              "you have a chance to be binded for 1 second"
          ],
          kind = "Reflex"
      },
      {
          title =  "Hellfire ",
          properties = 
          [
              "+45% move speed while firing",
              "+5% move speed while not firing"
          ],
          kind = "Reflex"
      },
      {
          title =  "Hi Vis Sights ",
          properties = 
          [
              "+30% aim speed"
          ],
          kind = "Reflex"
      },
      {
          title =  "Hyper-Focused ",
          properties = 
          [
              "+50% weakspot damage",
              "-75% ADS Move Speed"
          ],
          kind = "Reflex"
      },
      {
          title =  "Killer’s Instinct ",
          properties = 
          [
              "+30% weakspot damage",
              "disables aim down sights"
          ],
          kind = "Reflex"
      },
      {
          title =  "Mad Dash ",
          properties = 
          [
              "+20% sprint speed",
              "-30% stamina efficiency"
          ],
          kind = "Reflex"
      },
      {
          title =  "Mag Carrier ",
          properties = 
          [
              "+30% pistol/SMG ammo capacity",
              "+10% damage with pistols and SMGs"
          ],
          kind = "Reflex"
      },
      {
          title =  "Mag Coupler ",
          properties = 
          [
              "+50% reload speed",
              "disables aim down sights"
          ],
          kind = "Reflex"
      },
      {
          title =  "Mandatory PT ",
          properties = 
          [
              "Team Effect: +15% team stamina"
          ],
          kind = "Reflex"
      },
      {
          title =  "Marathon Runner ",
          properties = 
          [
              "No movement penalty for strafe and backpedal",
              "disables Sprint"
          ],
          kind = "Reflex"
      },
      {
          title =  "Medical Expert ",
          properties = 
          [
              "+15 healing efficiency",
              "plus +15% movement speed for 15 seconds when you use a medical accessory"
          ],
          kind = "Reflex"
      },
      {
          title =  "Meth Head ",
          properties = 
          [
              "40% melee attack speed",
              "+40% melee stamina efficiency",
              "Your melee attacks no longer stick in tough enemies",
              "disables aim down sights"
          ],
          kind = "Reflex"
      },
      {
          title =  "Miraculous Recovery ",
          properties = 
          [
              "A medical accessory has a 25% chance of having a 100% increased effect"
          ],
          kind = "Reflex"
      },
      {
          title =  "Multitool ",
          properties = 
          [
              "75% use speed",
              "-5% damage resistance"
          ],
          kind = "Reflex"
      },
      {
          title =  "On Your Mark… ",
          properties = 
          [
              "When you exit a starting saferoom your team gains +15% move speed for 30 seconds"
          ],
          kind = "Reflex"
      },
      {
          title =  "Olympic Sprinter ",
          properties = 
          [
              "+30% sprint efficiency",
              "-5% damage resistance"
          ],
          kind = "Reflex"
      },
      {
          title =  "Pep in your Step ",
          properties = 
          [
              "Precision Kills grant 10% movement speed for five seconds"
          ],
          kind = "Reflex"
      },
      {
          title =  "Pep Talk ",
          properties = 
          [
              "+150% revive speed",
              "-5% damage resistance"
          ],
          kind = "Reflex"
      },
      {
          title =  "Power Swap ",
          properties = 
          [
              "Changing weapons within 0.75 seconds of hitting low ammo grants +20% damage for five seconds"
          ],
          kind = "Reflex"
      },
      {
          title =  "Reckless ",
          properties = 
          [
              "+40% sprint efficiency",
              "When you take damage while sprinting",
              "you lose all your stamina"
          ],
          kind = "Reflex"
      },
      {
          title =  "Reckless Strategy ",
          properties = 
          [
              "+30% weakspot damage",
              "-5% damage resistance"
          ],
          kind = "Reflex"
      },
      {
          title =  "Reload Drills ",
          properties = 
          [
              "+30% reload speed"
          ],
          kind = "Reflex"
      },
      {
          title =  "Rhythmic Breathing ",
          properties = 
          [
              "+60% stamina",
              "-20% slow resistance"
          ],
          kind = "Reflex"
      },
      {
          title =  "Ridden Slayer ",
          properties = 
          [
              "+20% weak spot damage"
          ],
          kind = "Reflex"
      },
      {
          title =  "Rolling Thunder ",
          properties = 
          [
              "+6% move speed while using an SMG",
              "+35% reload speed while using an SMG"
          ],
          kind = "Reflex"
      },
      {
          title =  "Rousing Speech ",
          properties = 
          [
              "+225% revive speed",
              "disables offensive accessories",
              "Team Effect: +20% reduced incap trauma"
          ],
          kind = "Reflex"
      },
      {
          title =  "Run Like Hell ",
          properties = 
          [
              "+15% move speed",
              "When you take damage your accuracy is reduced by 20% for 3 seconds"
          ],
          kind = "Reflex"
      },
      {
          title =  "Sadistic ",
          properties = 
          [
              "Gain 5% weakspot damage for each precision kill in the last 10 seconds"
          ],
          kind = "Reflex"
      },
      {
          title =  "Screwdriver ",
          properties = 
          [
              "+50% use speed",
              "+10% stamina"
          ],
          kind = "Reflex"
      },
      {
          title =  "Shooting Gloves ",
          properties = 
          [
              "+25% weapon swap speed"
          ],
          kind = "Reflex"
      },
      {
          title =  "Shredder ",
          properties = 
          [
              "Each bullet hit causes the target to take 1% increased damage for 3 seconds (stacks up to 15%)"
          ],
          kind = "Reflex"
      },
      {
          title =  "Slugger ",
          properties = 
          [
              "+5 health",
              "+10% melee stamina efficiency",
              "+20% melee attack speed"
          ],
          kind = "Reflex"
      },
      {
          title =  "Smelling Salts ",
          properties = 
          [
              "+100% revive speed"
          ],
          kind = "Reflex"
      },
      {
          title =  "Speed Demon ",
          properties = 
          [
              "+6% move speed while using an SMG",
              "+35% reload speed while using an SMG"
          ],
          kind = "Reflex"
      },
      {
          title =  "Stamina ",
          properties = 
          [
              "+10% Stamina"
          ],
          kind = "Reflex"
      },
      {
          title =  "Steady Aim ",
          properties = 
          [
              "+80% aim speed",
              "-50% ADS move speed"
          ],
          kind = "Reflex"
      },
      {
          title =  "Stimulants ",
          properties = 
          [
              "Pain meds grant +10% movement speed",
              "10% reload speed",
              "and 10% weapon swap speed for 30 seconds"
          ],
          kind = "Reflex"
      },
      {
          title =  "Stock Pouch ",
          properties = 
          [
              "+30% sniper ammo capacity",
              "+10% damage with sniper rifles"
          ],
          kind = "Reflex"
      },
      {
          title =  "Superior Cardio ",
          properties = 
          [
              "+50% sprint efficiency",
              "+5 health"
          ],
          kind = "Reflex"
      },
      {
          title =  "Tunnel Vision ",
          properties = 
          [
              "+50% aim speed",
              "-5% damage resistance"
          ],
          kind = "Reflex"
      },
      {
          title =  "Utility Scavenger ",
          properties = 
          [
              "You can sense nearby quick accessories",
              "more quick accessories spawn"
          ],
          kind = "Reflex"
      },
      {
          title =  "Widemouth Magwell ",
          properties = 
          [
              "+30% reload speed",
              "-5% damage resistance"
          ],
          kind = "Reflex"
      },
      {
          title =  "Ammo",
          properties = 
          [
              "+10% ammo"
          ],
          kind = "Discipline"
      },
      {
          title =  "Ammo Belt",
          properties = 
          [
              "+50% ammo capacity",
              "-20% stamina efficiency"
          ],
          kind = "Discipline"
      },
      {
          title =  "Ammo For All",
          properties = 
          [
              "Team Effect: +10% team ammo capacity"
          ],
          kind = "Discipline"
      },
      {
          title =  "Ammo Mule",
          properties = 
          [
              "75% ammo capacity",
              "disables support accessories"
          ],
          kind = "Discipline"
      },
      {
          title =  "Ammo Pouch",
          properties = 
          [
              "+25% ammo capacity"
          ],
          kind = "Discipline"
      },
      {
          title =  "Ammo Scavenger",
          properties = 
          [
              "You can sense nearby ammo",
              "more ammo spawns"
          ],
          kind = "Discipline"
      },
      {
          title =  "Amped Up",
          properties = 
          [
              "When you exit a starting saferoom your team gains 50 temporary health"
          ],
          kind = "Discipline"
      },
      {
          title =  "Antibiotic Ointment",
          properties = 
          [
              "+20% healing efficiency"
          ],
          kind = "Discipline"
      },
      {
          title =  "Avenge The Fallen",
          properties = 
          [
              "Team Effect: When you or a teammate becomes incapacitated",
              "all teammates gain 30% damage",
              "20% reload speed and unlimited ammo for 10 seconds."
          ],
          kind = "Discipline"
      },
      {
          title =  "Charitable Soul",
          properties = 
          [
              "Heals granted to a teammate will also apply 50% of the effect to you"
          ],
          kind = "Discipline"
      },
      {
          title =  "Cold Brew Coffee",
          properties = 
          [
              "+40% stamina regeneration",
              "-10% stamina efficiency"
          ],
          kind = "Discipline"
      },
      {
          title =  "Combat Knife",
          properties = 
          [
              "Turns your Bash into a Knife that counts as a Melee weapon."
          ],
          kind = "Discipline"
      },
      {
          title =  "Combat Training",
          properties = 
          [
              "+5% damage dealt",
              "+50% bullet penetration"
          ],
          kind = "Discipline"
      },
      {
          title =  "Controlled Movement",
          properties = 
          [
              "+40% move speed while aiming down sights with sniper rifles"
          ],
          kind = "Discipline"
      },
      {
          title =  "Down In Front!",
          properties = 
          [
              "While crouching you neither take nor deal Friendly Fire damage",
              "+10 health"
          ],
          kind = "Discipline"
      },
      {
          title =  "EMT Bag",
          properties = 
          [
              "+40% healing efficiency",
              "-20% stamina efficiency"
          ],
          kind = "Discipline"
      },
      {
          title =  "Energy Bar",
          properties = 
          [
              "+20% stamina regeneration",
              "5 health"
          ],
          kind = "Discipline"
      },
      {
          title =  "Experienced EMT",
          properties = 
          [
              "Medical accessories will grant +20% maximum health until the end of the level"
          ],
          kind = "Discipline"
      },
      {
          title =  "Field Surgeon",
          properties = 
          [
              "+60% healing efficiency",
              "-50% use speed"
          ],
          kind = "Discipline"
      },
      {
          title =  "Front Sight Focus",
          properties = 
          [
              "+20% accuracy"
          ],
          kind = "Discipline"
      },
      {
          title =  "Group Therapy",
          properties = 
          [
              "All teammates heal for 5 health when a medical accessory is used"
          ],
          kind = "Discipline"
      },
      {
          title =  "Hunker Down",
          properties = 
          [
              "+10% damage resistance and +40% accuracy when crouching"
          ],
          kind = "Discipline"
      },
      {
          title =  "In the Zone",
          properties = 
          [
              "+5% reload speed for five seconds (can be stacked ten times) when getting precision kills"
          ],
          kind = "Discipline"
      },
      {
          title =  "Inspiring Sacrifice",
          properties = 
          [
              "Team Effect: All teammates heal for 25 health over twenty seconds if someone is incapacitated"
          ],
          kind = "Discipline"
      },
      {
          title =  "Knowledge Is Power",
          properties = 
          [
              "+10% weakspot damage",
              "allows players to see values for damage they deal and enemy health bars"
          ],
          kind = "Discipline"
      },
      {
          title =  "Large Caliber Rounds",
          properties = 
          [
              "+7.5% bullet damage",
              "+100% bullet penetration",
              "-20% stamina efficiency"
          ],
          kind = "Discipline"
      },
      {
          title =  "Marked for Death",
          properties = 
          [
              "+10% damage to pinged mutations and mutations are highlighted"
          ],
          kind = "Discipline"
      },
      {
          title =  "Meat Grinder",
          properties = 
          [
              "Gain 30% move speed and accuracy while crouched and using an LMG"
          ],
          kind = "Discipline"
      },
      {
          title =  "Medical Professional",
          properties = 
          [
              "First Aids and Defibrillators recover 15 trauma damage and one extra life"
          ],
          kind = "Discipline"
      },
      {
          title =  "Motorcycle Helmet",
          properties = 
          [
              "+15% damage resistance",
              "+10 health",
              "disables aim down sights"
          ],
          kind = "Discipline"
      },
      {
          title =  "Motorcycle Jacket",
          properties = 
          [
              "+5% damage resistance",
              "+5 health"
          ],
          kind = "Discipline"
      },
      {
          title =  "Natural Sprinter",
          properties = 
          [
              "+100% stamina regeneration",
              "-50% maximum stamina"
          ],
          kind = "Discipline"
      },
      {
          title =  "Needs Of The Many",
          properties = 
          [
              "-20% health",
              "Team Effect: +1 team extra life"
          ],
          kind = "Discipline"
      },
      {
          title =  "Optics Enthusiast",
          properties = 
          [
              "+30% accuracy",
              "-20% stamina efficiency"
          ],
          kind = "Discipline"
      },
      {
          title =  "Padded Suit",
          properties = 
          [
              "+10% damage resistance",
              "+5 health",
              "-20% stamina efficiency"
          ],
          kind = "Discipline"
      },
      {
          title =  "Patient Hunter",
          properties = 
          [
              "+10% damage for each second aimed down sights (can be stacked three times)"
          ],
          kind = "Discipline"
      },
      {
          title =  "Poultice",
          properties = 
          [
              "Teammate gains +20 health over 30 seconds when healed"
          ],
          kind = "Discipline"
      },
      {
          title =  "Power Reload",
          properties = 
          [
              "Reloading a gun within 0.75 seconds of hitting low ammo grants +30% mag capacity until the next reload"
          ],
          kind = "Discipline"
      },
      {
          title =  "Quick Kill",
          properties = 
          [
              "+50% accuracy",
              "disables aim down sights"
          ],
          kind = "Discipline"
      },
      {
          title =  "Scattergun Skills",
          properties = 
          [
              "+40% reload speed with shotguns"
          ],
          kind = "Discipline"
      },
      {
          title =  "Silver Bullets",
          properties = 
          [
              "+10% bullet damage",
              "+150% bullet penetration",
              "when you kill a Mutation",
              "you lose 5 copper"
          ],
          kind = "Discipline"
      },
      {
          title =  "Support Scavenger",
          properties = 
          [
              "You can sense nearby support accessories",
              "more support accessories spawn"
          ],
          kind = "Discipline"
      },
      {
          title =  "Tactical Vest",
          properties = 
          [
              "+30% rifle ammo capacity",
              "+10% damage with assault rifles and LMGs"
          ],
          kind = "Discipline"
      },
      {
          title =  "Trigger Control",
          properties = 
          [
              "+25% accuracy with assault rifles and sniper rifles."
          ],
          kind = "Discipline"
      },
      {
          title =  "Vanguard",
          properties = 
          [
              "Melee kills grant 1 temporary health to you and nearby teammates"
          ],
          kind = "Discipline"
      },
      {
          title =  "Weapon Scavenger",
          properties = 
          [
              "You can sense nearby weapons",
              "more weapons spawn"
          ],
          kind = "Discipline"
      },
      {
          title =  "Batter Up",
          properties = 
          [
              "+50% melee damage",
              "+5 health"
          ],
          kind = "Brawn"
      },
      {
          title =  "Battle Lust",
          properties = 
          [
              "Melee kills heal two health"
          ],
          kind = "Brawn"
      },
      {
          title =  "Berserker",
          properties = 
          [
              "Gain 10% melee damage",
              "10% melee speed",
              "and 5% move speed for each melee kill in the last 4 seconds"
          ],
          kind = "Brawn"
      },
      {
          title =  "Body Armor",
          properties = 
          [
              "+25% trauma resistance",
              "-15% ammo capacity"
          ],
          kind = "Brawn"
      },
      {
          title =  "Bomb Squad",
          properties = 
          [
              "+100% explosive damage",
              "35+ explosive resistance"
          ],
          kind = "Brawn"
      },
      {
          title =  "Broadside",
          properties = 
          [
              "Precision kills have a 20% chance to cause Ridden to explode",
              "dealing 15 damage to other Ridden within 4 meters"
          ],
          kind = "Brawn"
      },
      {
          title =  "Buckshot Bruiser",
          properties = 
          [
              "When using Shotguns",
              "gain temporary health for each pellet that hits."
          ],
          kind = "Brawn"
      },
      {
          title =  "Canned Goods",
          properties = 
          [
              "+40 health",
              "-30% stamina"
          ],
          kind = "Brawn"
      },
      {
          title =  "Chemical Courage",
          properties = 
          [
              "Pain meds grant +25% damage for 60 seconds"
          ],
          kind = "Brawn"
      },
      {
          title =  "Confident Killer",
          properties = 
          [
              "+1% damage (up to 15%) every time you kill a mutation until the end of the level"
          ],
          kind = "Brawn"
      },
      {
          title =  "Demolitions Expert",
          properties = 
          [
              "+50% accessory damage",
              "-15% ammo capacity"
          ],
          kind = "Brawn"
      },
      {
          title =  "Durable",
          properties = 
          [
              "+15% trauma resistance",
              "+5 health"
          ],
          kind = "Brawn"
      },
      {
          title =  "Face Your Fears",
          properties = 
          [
              "+3 temporary health when you kill a Ridden within two metres"
          ],
          kind = "Brawn"
      },
      {
          title =  "Fresh Bandage",
          properties = 
          [
              "heal 10 trauma damage at the start of each level"
          ],
          kind = "Brawn"
      },
      {
          title =  "Grenade Training",
          properties = 
          [
              "+25% accessory damage"
          ],
          kind = "Brawn"
      },
      {
          title =  "Health",
          properties = 
          [
              "+5 health"
          ],
          kind = "Brawn"
      },
      {
          title =  "Heavy Attack",
          properties = 
          [
              "Hold R2 with Melee weapons to burst forward",
              "charge attacks deal 100% increased damage"
          ],
          kind = "Brawn"
      },
      {
          title =  "Heavy Hitter",
          properties = 
          [
              "Melee hits against weakspots deal +20% additional atumble damage"
          ],
          kind = "Brawn"
      },
      {
          title =  "Hydration Pack",
          properties = 
          [
              "+25% health",
              "-15% ammo capacity"
          ],
          kind = "Brawn"
      },
      {
          title =  "Ignore The Pain",
          properties = 
          [
              "+20% melee damage against Mutations",
              "when you deal melee damage to a mutation gain 1 temporary health and recover 3 stamina"
          ],
          kind = "Brawn"
      },
      {
          title =  "Improvised Explosives",
          properties = 
          [
              "+75% accessory damage",
              "-25% swap speed"
          ],
          kind = "Brawn"
      },
      {
          title =  "Line ‘Em Up",
          properties = 
          [
              "+100% bullet penetration with assault rifles"
          ],
          kind = "Brawn"
      },
      {
          title =  "Mean Drunk",
          properties = 
          [
              "+75% melee damage",
              "your melee attacks cause cleave through enemies dealing damage in a large area",
              "disables sprint"
          ],
          kind = "Brawn"
      },
      {
          title =  "Numb",
          properties = 
          [
              "+15% damage resistance while you have temporary health"
          ],
          kind = "Brawn"
      },
      {
          title =  "Offensive Scavenger",
          properties = 
          [
              "You can sense nearby offensive accessories",
              "more offensive accessories spawn"
          ],
          kind = "Brawn"
      },
      {
          title =  "Overwatch",
          properties = 
          [
              "Kills at more than 15 metres grants five temporary health to nearby allies within 10 meters of the target"
          ],
          kind = "Brawn"
      },
      {
          title =  "Pyro",
          properties = 
          [
              "+100% fire damage",
              "kills with fire grant you 3 temporary health",
              "you can sense flammable objects nearby"
          ],
          kind = "Brawn"
      },
      {
          title =  "Scar Tissue",
          properties = 
          [
              "Reduces the damage taken by all Ridden by one"
          ],
          kind = "Brawn"
      },
      {
          title =  "Second Chance",
          properties = 
          [
              "+1 extra life",
              "+5 health"
          ],
          kind = "Brawn"
      },
      {
          title =  "Spiky Bits",
          properties = 
          [
              "+25% melee damage",
              "+10% damage resistance while using a melee weapon",
              "-15% ammo capacity"
          ],
          kind = "Brawn"
      },
      {
          title =  "Sunder",
          properties = 
          [
              "Melee hits cause the target to take 20% increased damage for 5 seconds"
          ],
          kind = "Brawn"
      },
      {
          title =  "True Grit",
          properties = 
          [
              "+8 health over five seconds when hit for 15 or more damage"
          ],
          kind = "Brawn"
      },
      {
          title =  "Two is One and One is None",
          properties = 
          [
              "Grants the ability to equip a second primary",
              "-25% weapon swap speed"
          ],
          kind = "Brawn"
      },
      {
          title =  "Vitamins",
          properties = 
          [
              "+15 health"
          ],
          kind = "Brawn"
      },
      {
          title =  "Well Fed",
          properties = 
          [
              "-20% stamina regen",
              "Team Effect: team health +10"
          ],
          kind = "Brawn"
      },
      {
          title =  "Wooden Armor",
          properties = 
          [
              "+40% trauma resistance",
              "-100%fire resistance",
              "-100% acid resistance",
              "-100% explosion resistance"
          ],
          kind = "Brawn"
      },
      {
          title =  "Card name",
          properties = 
          [
              "Description"
          ],
          kind = "Fortune"
      },
      {
          title =  "Admin Reload",
          properties = 
          [
              "When you stow your weapon",
              "it reloads",
              "-15% ammo capacity"
          ],
          kind = "Fortune"
      },
      {
          title =  "Ammo Stash",
          properties = 
          [
              "Secondary weapons have unlimited ammo",
              "your secondary weapon reload is 20% slower"
          ],
          kind = "Fortune"
      },
      {
          title =  "Bounty Hunter",
          properties = 
          [
              "When you kill a Mutation",
              "gain 10 copper (up to 300 per level)"
          ],
          kind = "Fortune"
      },
      {
          title =  "Box O’ Bags",
          properties = 
          [
              "-10% health",
              "Team Effect: +1 team support inventory"
          ],
          kind = "Fortune"
      },
      {
          title =  "Compound Interest",
          properties = 
          [
              "Gain 10% of your total copper in each saferoom"
          ],
          kind = "Fortune"
      },
      {
          title =  "Copper Scavenger",
          properties = 
          [
              "You can sense nearby Copper",
              "more Copper piles spawn"
          ],
          kind = "Fortune"
      },
      {
          title =  "Double Grenade Pouch",
          properties = 
          [
              "+2 offensive inventory",
              "-10% damage dealt"
          ],
          kind = "Fortune"
      },
      {
          title =  "Fanny Pack",
          properties = 
          [
              "+1 support inventory"
          ],
          kind = "Fortune"
      },
      {
          title =  "Fortune",
          properties = 
          [
              "Gain 25 to 50 Copper at the start of each level"
          ],
          kind = "Fortune"
      },
      {
          title =  "Grenade Pouch",
          properties = 
          [
              "+1 offensive inventory"
          ],
          kind = "Fortune"
      },
      {
          title =  "Hazard Pay",
          properties = 
          [
              "Gain 250% bonus copper at the start of each level"
          ],
          kind = "Fortune"
      },
      {
          title =  "Highwayman",
          properties = 
          [
              "Pistol kills have a 2% chance to spawn ammo"
          ],
          kind = "Fortune"
      },
      {
          title =  "Life Insurance",
          properties = 
          [
              "+2 extra life",
              "lose 50 copper at the start of each level"
          ],
          kind = "Fortune"
      },
      {
          title =  "Lucky Pennies",
          properties = 
          [
              "whenever you or your team loots copper you have a 35% chance to find 35% additional copper"
          ],
          kind = "Fortune"
      },
      {
          title =  "Money Grubbers",
          properties = 
          [
              "Each time your team loots copper you gain 5 additional copper",
              "stacking up to 100 additional copper."
          ],
          kind = "Fortune"
      },
      {
          title =  "Mugger",
          properties = 
          [
              "Melee kills have a 2% chance to spawn ammo"
          ],
          kind = "Fortune"
      },
      {
          title =  "Run and Gun",
          properties = 
          [
              "You can shoot while sprinting"
          ],
          kind = "Fortune"
      },
      {
          title =  "Saferoom Recovery",
          properties = 
          [
              "Your team heals 5 trauma damage and refills 10% ammo at the start of each level"
          ],
          kind = "Fortune"
      },
      {
          title =  "Share The Wealth",
          properties = 
          [
              "Each teammate gains 100 bonus copper at the start of each level"
          ],
          kind = "Fortune"
      },
      {
          title =  "Shell Carrier",
          properties = 
          [
              "+30% shotgun ammo capacity",
              "+10% damage with shotguns"
          ],
          kind = "Fortune"
      },
      {
          title =  "Shoulder Bag",
          properties = 
          [
              "+2 support inventory",
              "-10% damage dealt"
          ],
          kind = "Fortune"
      },
      {
          title =  "Surplus Pouches",
          properties = 
          [
              "-10% health",
              "Team Effect: +1 team offensive inventory "
          ],
          kind = "Fortune"
      },
      {
          title =  "Wounded Animal",
          properties = 
          [
              "Kills while at critical health recover 1 health"
          ],
          kind = "Fortune"
      }
  ] |> List.indexedMap (\index raw -> 
            { id = index
            , title = raw.title
            , properties = raw.properties |> List.map Property
            , kind = case raw.kind |> String.toLower of
                      "reflex" ->
                        Reflex
                      "discipline" ->
                        Discipline
                      "brawn" ->
                        Brawn
                      "fortune" ->
                        Fortune
                      _ ->
                        Unknown
            })