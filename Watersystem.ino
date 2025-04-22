#define WATER_SENSOR_PIN 8  // Digital pin connected to water sensor D0
#define RELAY_PIN 2         // Digital pin connected to relay module
#define RED_LED_PIN 3       // Red LED pin
#define GREEN_LED_PIN 4     // Green LED pin

void setup() {
  pinMode(WATER_SENSOR_PIN, INPUT);   // Water sensor as input
  pinMode(RELAY_PIN, OUTPUT);         // Relay as output
  pinMode(RED_LED_PIN, OUTPUT);       // Red LED as output
  pinMode(GREEN_LED_PIN, OUTPUT);     // Green LED as output

  digitalWrite(RELAY_PIN, LOW);       // Ensure relay starts OFF
  digitalWrite(RED_LED_PIN, LOW);     // Start with LEDs OFF
  digitalWrite(GREEN_LED_PIN, LOW);

  Serial.begin(9600);                 // Initialize Serial Monitor
}

void loop() {
  int sensorState = digitalRead(WATER_SENSOR_PIN); // Read water sensor (HIGH or LOW)

  Serial.print("Water Sensor State: ");
  Serial.println(sensorState); // Print state to Serial Monitor

  if (sensorState == LOW) { 
    digitalWrite(RELAY_PIN, HIGH);        // Turn relay ON
    digitalWrite(RED_LED_PIN, HIGH);      // Red LED ON
    digitalWrite(GREEN_LED_PIN, LOW);     // Green LED OFF
    Serial.println("Water not detected! Relay ON.");
  } else {
    digitalWrite(RELAY_PIN, LOW);         // Turn relay OFF
    digitalWrite(RED_LED_PIN, LOW);       // Red LED OFF
    digitalWrite(GREEN_LED_PIN, HIGH);    // Green LED ON
    Serial.println("Water detected. Relay OFF.");
  }

  delay(500); // Small delay for stability
}
