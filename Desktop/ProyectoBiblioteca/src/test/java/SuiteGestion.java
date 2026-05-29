import org.junit.platform.suite.api.SelectClasses;
import org.junit.platform.suite.api.Suite;

/**
 * Suite de pruebas que agrupa todas las pruebas unitarias del sistema de gestión.
 * Ejecuta las pruebas de las clases: BibliotecaTest y LibroTest
 */
@Suite
@SelectClasses({ BibliotecaTest.class, LibroTest.class })
public class SuiteGestion { }